import { MyCarousel } from "@/components/Carousel/Carousel";
import FlashCard from "@/components/FlashCard/FlashCard";
import StoreFeaturedSection from "@/features/StoreFeaturedSection";
import { metaGenerator } from "@/features/metagenerator/metagenerator";
import GridViewProduct from "@/features/store/(home)/GridViewProduct";
import RecommendProducts from "@/features/store/(home)/RecommendedProducts";
import StoreHomeTabBar from "@/features/store/(home)/TabBar";
import TrendingProducts from "@/features/store/(home)/TrendingProducts";
import {
  fetchCarouselData,
  fetchProductData,
} from "@/features/store/(home)/server/initialDataFetch";

export const metadata = metaGenerator({
  title: "Araya Arts | Store",
});

export default async function Page() {
  const data = await fetchProductData();
  const carouselData = await fetchCarouselData();

  return (
    <div className="">
      <MyCarousel initialData={carouselData} />
      <div className="mx-auto flex max-w-7xl flex-col gap-10 pb-14 pt-12 md:px-8 lg:pt-24 2xl:px-0">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 2xl:grid-cols-4">
          <FlashCard />
          <FlashCard />
          <FlashCard />
          <FlashCard />
        </div>
        <StoreHomeTabBar initialData={data} />
      </div>
      <StoreFeaturedSection initialData={data} />

      <div className="mx-auto flex max-w-7xl flex-col gap-10 pb-14 pt-24 md:px-8 2xl:px-0">
        <TrendingProducts initialData={data} />
        <RecommendProducts initialData={data} />
        <GridViewProduct initialData={data} />
      </div>
    </div>
  );
}
