import StoreFooter from "@/components/StoreFooter/Footer";
import { StoreNavbar } from "@/components/StoreNavbar";
import SearchBar from "@/features/SearchBar/SearchBar";
import { metaGenerator } from "@/features/metagenerator/metagenerator";
import { PropsWithChildren } from "react";

export const metadata = metaGenerator({
  title: "Araya Arts | Store",
});

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <div className="relative flex min-h-screen flex-col bg-primary-dark">
        <SearchBar />
        <StoreNavbar />
        <div className="mt-[75px] flex-grow lg:mt-[130px]">{children}</div>
        <StoreFooter />
      </div>
    </>
  );
}
