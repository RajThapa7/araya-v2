"use client";
import axios from "axios";
import { usePathname } from "next/navigation";

const useCreateApi = () => {
  const currentRoute = usePathname();
  const isAdminRoute = currentRoute.split("/").slice(1).includes("admin");

  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  });

  api.interceptors.request.use(function (config) {
    if (config.headers) {
      config.headers["Authorization"] = `Bearer token`;

      return config;
    }
    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error?.response?.status === 401) {
        // logout();
      }
      return Promise.reject(error);
    }
  );

  return api;
};

export default useCreateApi;
