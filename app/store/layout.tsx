"use client";
import { ScrollUp } from "@/components";
import Footer from "@/components/Footer/Footer";
import { MyNavbar } from "@/components/Navbar";
import ProgressBarProvider from "@/components/Provider/ProgressBarProvider";
import SearchBar from "@/features/SearchBar/SearchBar";
import { PropsWithChildren } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../globals.css";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <div className="bg-primary-dark flex flex-col min-h-screen">
        <SearchBar />
        <MyNavbar />
        <ProgressBarProvider>
          <div className="flex-grow">{children}</div>
        </ProgressBarProvider>
        <Footer />
      </div>
      <ScrollUp />
      <ToastContainer theme="colored" hideProgressBar autoClose={2000} />
    </>
  );
}
