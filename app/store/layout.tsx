import { Modal } from "@/components/Modal/Modal";
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
      <Modal />
      <div className="relative bg-primary-dark flex flex-col min-h-screen">
        <SearchBar />
        <StoreNavbar />
        <div className="flex-grow mt-[75px] lg:mt-[130px]">{children}</div>
        <StoreFooter />
      </div>
    </>
  );
}
