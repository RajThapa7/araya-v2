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
      config.headers[
        "Authorization"
      ] = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjY2MGUxMTZmNTdkMTcxOTFhY2I3MjE5NyIsImV4cGlyZSI6MTcxMzA3ODc5MTE3OSwiaXNBZG1pbiI6dHJ1ZX0.4MIHftkbO3CHFzYmUGZJmQqcRaxrHSNDuMTb9zQ9zWQ`;

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
