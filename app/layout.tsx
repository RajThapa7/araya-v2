import { PropsWithChildren } from "react";
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
        {children}
      </body>
    </html>
  );
};

export default Layout;
