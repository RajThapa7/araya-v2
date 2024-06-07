"use client";
import { Modal } from "@/components/Modal/Modal";
import StoreFooter from "@/components/StoreFooter/Footer";
import { StoreNavbar } from "@/components/StoreNavbar";
import SearchBar from "@/features/SearchBar/SearchBar";
import { PropsWithChildren } from "react";

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
