import LandingNavbar from "@/components/LandingNavbar";
import { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Araya Arts",
  description: "Araya Arts | Handmade Custom Notebooks and other art materials",
  keywords: [
    "handmade diary",
    "handmade notes",
    "handmade",
    "handmade arts",
    "arts",
  ],
  openGraph: {
    type: "website",
    siteName: "Araya Arts",
    description:
      "Araya Arts | Handmade Custom Notebooks and other art materials",
    url: "https://arayaarts.netlify.app/",
    images: {
      width: 1100,
      height: 600,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRma2ct_w2jBSZrlyT9G5Uv_lXJBvWNnAsIoA&s",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LandingNavbar />
      {children}
    </>
  );
}
