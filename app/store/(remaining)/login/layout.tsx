import { metaGenerator } from "@/features/metagenerator/metagenerator";
import { PropsWithChildren } from "react";

export const metadata = metaGenerator({
  title: "Login | Araya Arts Store",
});

const Layout = ({ children }: PropsWithChildren) => {
  return <div className="px-4 pt-12 md:px-0 md:pt-0">{children}</div>;
};

export default Layout;
