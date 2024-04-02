import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Register | Araya Arts Store",
  description: "Araya Arts | Handmade Custom Notebooks and other art materials",
};

const Layout = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

export default Layout;
