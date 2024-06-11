import LandingFooter from "@/components/LandingFooter";
import LandingNavbar from "@/components/LandingNavbar";
import { metaGenerator } from "@/features/metagenerator/metagenerator";
import { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = metaGenerator();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LandingNavbar />
      {children}
      <LandingFooter />
    </>
  );
}
