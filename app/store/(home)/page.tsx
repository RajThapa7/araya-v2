import { MyCarousel } from "@/components/Carousel/Carousel";
import FlashCard from "@/components/FlashCard/FlashCard";
import StoreFeaturedSection from "@/features/StoreFeaturedSection";
import GridViewProduct from "@/features/store/(home)/GridViewProduct";
import RecommendProducts from "@/features/store/(home)/RecommendedProducts";
import StoreHomeTabBar from "@/features/store/(home)/TabBar";
import TrendingProducts from "@/features/store/(home)/TrendingProducts";
import {
  fetchCarouselData,
  fetchProductData,
} from "@/features/store/(home)/server/initialDataFetch";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Araya Arts | Store",
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

export default async function Page() {
  const data = await fetchProductData();
  const carouselData = await fetchCarouselData();

  return (
    <div className="">
      <MyCarousel initialData={carouselData} />
      <div className="mx-auto max-w-7xl px-8 2xl:px-0 flex flex-col gap-12 mt-14">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 2xl:grid-cols-4">
          <FlashCard />
          <FlashCard />
          <FlashCard />
          <FlashCard />
        </div>
        <StoreHomeTabBar initialData={data} />
      </div>
      <StoreFeaturedSection initialData={data} />

      <div className="flex flex-col gap-10 pt-24 pb-14 mx-auto max-w-7xl px-8 2xl:px-0">
        <TrendingProducts initialData={data} />
        <RecommendProducts initialData={data} />
        <GridViewProduct initialData={data} />
      </div>
    </div>
  );
}
