import { ScrollUp } from "@/components";
import { Navbar } from "@/features";
import { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Araya Arts",
  description: "Araya Arts | Handmade Custom Notebooks and other art materials",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <ScrollUp />
    </>
  );
}
