import { ScrollUp } from "@/components";
import { Navbar } from "@/features";
import { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={`${montserrat.className} debug-screens`}>
        <Navbar />
        {children}
        <ScrollUp />
      </body>
    </html>
  );
}
