import { Metadata, ResolvingMetadata } from "next";
import { PropsWithChildren } from "react";

type Props = {
  params: { category: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
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
