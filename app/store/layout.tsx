import { ScrollUp } from "@/components";
import Footer from "@/components/Footer/Footer";
import { MyNavbar } from "@/components/Navbar";
import SearchBar from "@/components/SearchBar/SearchBar";
import { PropsWithChildren } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
        <div className="bg-primary-dark flex flex-col min-h-screen">
          <SearchBar />
          <MyNavbar />
          <div className="flex-grow">{children}</div>
          <Footer />
        </div>
        <ScrollUp />
        <ToastContainer theme="colored" hideProgressBar autoClose={2000} />
      </body>
    </html>
  );
}
