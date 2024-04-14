import { Metadata } from "next";
import { PropsWithChildren } from "react";

type Props = {
  params: { category: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `${params.category} | Araya Arts Store`,
    description:
      "Araya Arts | Handmade Custom Notebooks and other art materials",
  };
}

const Layout = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

export default Layout;
