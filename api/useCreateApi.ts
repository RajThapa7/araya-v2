"use client";
import { useAuth } from "@/Providers/AuthProvider";
import axios from "axios";
import { usePathname } from "next/navigation";

const useCreateApi = () => {
  const { token, adminToken, logout } = useAuth();
  const currentRoute = usePathname();
  const isAdminRoute = currentRoute.split("/").slice(1).includes("admin");

  const accessToken = isAdminRoute ? adminToken : token;

  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  });

  api.interceptors.request.use(function (config) {
    if (config.headers) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;

      return config;
    }
    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if ([401, 403].includes(parseInt(error?.response?.status))) {
        logout("/store/login", "You have been logged out");
      }
      return Promise.reject(error);
    }
  );

  return api;
};

export default useCreateApi;
