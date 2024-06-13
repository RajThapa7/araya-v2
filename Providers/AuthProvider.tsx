"use client";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { PropsWithChildren, createContext, useContext } from "react";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";

interface IUser {
  _id: string;
  username: string;
  provider: string;
  provider_id: string | null;
  isAdmin: boolean;
}

type Value = {
  login: (
    user: IUser,
    token: string,
    route: string,
    isAdminLogin?: boolean,
  ) => void;
  logout: (route: string, message: string, isAdminLogout?: boolean) => void;
  token: string;
  adminToken: string;
  user: IUser;
};

const AuthContext = createContext<Value | undefined>(undefined);

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [authCookie, setAuthCookie] = useCookies([
    "accessToken",
    "user",
    "adminAccessToken",
    "admin",
  ]);

  const router = useRouter();
  const client = useQueryClient();

  const value: Value = {
    login: (
      user: IUser,
      token: string,
      route: string,
      isAdminLogin: boolean = false,
    ) => {
      if (!isAdminLogin) {
        setAuthCookie("accessToken", token);
        setAuthCookie("user", user);
      } else {
        setAuthCookie("adminAccessToken", token);
        setAuthCookie("admin", user);
      }
      //invalidate the wishlist and cart query on login
      client.invalidateQueries({
        predicate: (query) => {
          return ["wishlist", "cart"].includes(query.queryKey[0] as string);
        },
      });
      router.push(route);
    },
    logout: (
      route: string,
      message: string,
      isAdminLogout: boolean = false,
    ) => {
      if (isAdminLogout) {
        setAuthCookie("adminAccessToken", "");
        setAuthCookie("admin", "");
      } else {
        setAuthCookie("accessToken", "");
        setAuthCookie("user", "");
      }

      toast.success(message);

      client.clear(); //clear all the queries on logout
      router.push(route || "/store/login");
    },
    token: authCookie.accessToken,
    adminToken: authCookie.adminAccessToken,
    user: authCookie.user,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};

export { useAuth };

export default AuthProvider;
