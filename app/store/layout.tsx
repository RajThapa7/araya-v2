import { ScrollUp } from "@/components";
import Footer from "@/components/Footer/Footer";
import { MyNavbar } from "@/components/Navbar";
import SearchBar from "@/components/SearchBar/SearchBar";
import { Montserrat } from "next/font/google";
import { PropsWithChildren } from "react";
import "../globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html className={montserrat.className}>
      <body>
        <div className="bg-gray-50">
          <SearchBar />
          <MyNavbar />
          <div>{children}</div>
          <Footer />
        </div>
        <ScrollUp />
      </body>
    </html>
  );
}
