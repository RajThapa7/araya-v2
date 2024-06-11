import { metaGenerator } from "@/features/metagenerator/metagenerator";
import { PropsWithChildren } from "react";
import "../../globals.css";

export const metadata = metaGenerator({
  title: "Araya Arts | Store",
});

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="mx-auto mb-12 max-w-7xl md:mt-14 md:px-8">{children}</div>
  );
}
