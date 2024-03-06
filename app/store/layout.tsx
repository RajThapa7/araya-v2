import { ScrollUp } from "@/components";
import Footer from "@/components/Footer/Footer";
import { MyNavbar } from "@/components/Navbar";
import SearchBar from "@/components/SearchBar/SearchBar";
import { PropsWithChildren } from "react";
import { montserrat } from "../fonts";
import "../globals.css";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html className={montserrat.className}>
      <body
        className={`${
          process.env.NODE_ENV === "development" && "debug-screens"
        }`}
      >
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
