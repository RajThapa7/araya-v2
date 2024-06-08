import LandingFooter from "@/components/LandingFooter";
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
      url: "https://res.cloudinary.com/raj7/image/upload/v1715830737/araya-arts/fsbdsgty0lcqagmmqyth.png",
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
      <LandingFooter />
    </>
  );
}
