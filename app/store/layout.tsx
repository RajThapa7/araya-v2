"use client";
import { ScrollUp } from "@/components";
import Footer from "@/components/Footer/Footer";
import { MyNavbar } from "@/components/Navbar";
import SearchBar from "@/features/SearchBar/SearchBar";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  // const { user } = useAuth();
  // const { data } = useFetchWishlist(user._id);
  // const dispatch = useAppDispatch();
  // const pathname = usePathname();
  // useEffect(() => {
  //   dispatch(setInitialData({ wishlist: data?.products || [] }));
  //   console.log("dispatch called in " + pathname);
  // }, []);

  return (
    <>
      <div className="bg-primary-dark flex flex-col min-h-screen">
        <SearchBar />
        <MyNavbar />
        <div className="flex-grow">{children}</div>
        <Footer />
      </div>
      <ScrollUp />
    </>
  );
}
