"use client";
import AuthProvider from "@/Providers/AuthProvider";
import QueryProvider from "@/Providers/QueryProvider";
import StoreProvider from "@/Providers/StoreProvider";
import ProgressBarProvider from "@/components/Provider/ProgressBarProvider";
import { PropsWithChildren } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { montserrat } from "./fonts";
import "./globals.css";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} ${
          process.env.NODE_ENV === "development" && "debug-screens"
        }`}
      >
        <ProgressBarProvider>
          <QueryProvider>
            <StoreProvider>
              <AuthProvider>{children}</AuthProvider>
            </StoreProvider>
          </QueryProvider>
        </ProgressBarProvider>
        <ToastContainer theme="colored" hideProgressBar autoClose={2000} />
      </body>
    </html>
  );
};

export default Layout;
