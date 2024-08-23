import StoreFooter from "@/components/StoreFooter/Footer";
import { StoreNavbar } from "@/components/StoreNavbar";
import { metaGenerator } from "@/features/metagenerator/metagenerator";
import SearchBar from "@/features/SearchBar/SearchBar";
import { PropsWithChildren } from "react";

export const metadata = metaGenerator({
  title: "Araya Arts | Store",
});

export default async function Layout({ children }: PropsWithChildren) {
  // const authsuccess = await getAuthSuccess();
  // console.log(authsuccess, "auth success");
  return (
    <>
      <div className="relative flex min-h-screen flex-col bg-primary-dark">
        <SearchBar />
        <StoreNavbar />
        <div className="mt-[75px] flex-grow lg:mt-[130px]">{children}</div>
        <StoreFooter />
      </div>
    </>
  );
}
