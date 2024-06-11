import { metaGenerator } from "@/features/metagenerator/metagenerator";
import { Metadata } from "next";
import { PropsWithChildren } from "react";

type Props = {
  params: { category: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    ...metaGenerator({
      title: `${params.category} | Araya Arts Store`,
    }),
  };
}

const Layout = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

export default Layout;
