import useLocalStorage from "@/hooks/useLocalStorage";
import { useRouter } from "next-nprogress-bar";
import { PropsWithChildren, createContext, useContext } from "react";
import { toast } from "react-toastify";

type Value = {
  login: (token: string | null, route: string) => void;
  logout: (route: string, message: string) => void;
  token: string | null;
};

const AuthContext = createContext<Value | undefined>(undefined);

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [accessToken, setAccessToken, removeAccessToken] = useLocalStorage<
    string | null
  >("accessToken", null);

  const router = useRouter();

  const value: Value = {
    login: (token: string | null, route: string) => {
      setAccessToken(token);
      router.push(route);
    },
    logout: (route: string, message: string) => {
      toast.success(message);
      removeAccessToken();
      router.push(route);
    },
    token: accessToken,
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
