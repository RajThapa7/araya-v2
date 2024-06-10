import AuthProvider from "@/Providers/AuthProvider";
import CookieProvider from "@/Providers/CookieProvider";
import QueryProvider from "@/Providers/QueryProvider";
import StoreProvider from "@/Providers/StoreProvider";
import { ScrollUp } from "@/components";
import ProgressBarProvider from "@/components/Provider/ProgressBarProvider";
import { Metadata } from "next";
import { PropsWithChildren } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { montserrat } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Araya Arts",
  description: "Araya Arts | Handmade Custom Notebooks and other art materials",
  keywords: [
    "handmade diary",
    "handmade notes",
    "handmade",
    "handmade arts",
    "arts",
  ],
  openGraph: {
    type: "website",
    siteName: "Araya Arts",
    description:
      "Araya Arts | Handmade Custom Notebooks and other art materials",
    url: "https://arayaarts.netlify.app/",
    images: {
      url: "https://res.cloudinary.com/raj7/image/upload/v1715830737/araya-arts/fsbdsgty0lcqagmmqyth.png",
    },
  },
};

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
