import { metaGenerator } from "@/features/metagenerator/metagenerator";
import { PropsWithChildren } from "react";

export const metadata = metaGenerator({
  title: "My Wishlist | Araya Arts Store",
});

const Layout = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

export default Layout;
