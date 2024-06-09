import AuthProvider from "@/Providers/AuthProvider";
import CookieProvider from "@/Providers/CookieProvider";
import QueryProvider from "@/Providers/QueryProvider";
import StoreProvider from "@/Providers/StoreProvider";
import { ScrollUp } from "@/components";
import ProgressBarProvider from "@/components/Provider/ProgressBarProvider";
import { PropsWithChildren } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { montserrat } from "./fonts";
import "./globals.css";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${montserrat.className} ${
          process.env.NODE_ENV === "development" && "debug-screens"
        }`}
      >
        <ProgressBarProvider>
          <CookieProvider>
            <QueryProvider>
              <StoreProvider>
                <AuthProvider>{children}</AuthProvider>
                <ScrollUp />
              </StoreProvider>
            </QueryProvider>
          </CookieProvider>
        </ProgressBarProvider>
        <ToastContainer
          theme="colored"
          hideProgressBar
          autoClose={2000}
          position="bottom-right"
          className={"z-[99999]"}
        />
      </body>
    </html>
  );
};

export default Layout;
