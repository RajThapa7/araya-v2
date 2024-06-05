"use client";
import Footer from "@/components/Footer/Footer";
import { Modal } from "@/components/Modal/Modal";
import { MyNavbar } from "@/components/Navbar";
import SearchBar from "@/features/SearchBar/SearchBar";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Modal />
      <div className="relative bg-primary-dark flex flex-col min-h-screen">
        <SearchBar />
        <MyNavbar />
        <div className="flex-grow mt-[75px] lg:mt-[130px]">{children}</div>
        <Footer />
      </div>
    </>
  );
}
