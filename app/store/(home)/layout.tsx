"use client";
import { MyCarousel } from "@/components/Carousel/Carousel";
import FlashCard from "@/components/FlashCard/FlashCard";
import { MyTab } from "@/components/MyTab/MyTab";
import ProductSlider from "@/components/ProductSlider/ProductSlider";
import { data } from "@/data/productData";
import FeaturedSection from "@/features/StoreFeaturedSection";
import { PropsWithChildren } from "react";
import "../../globals.css";

const Desc = () => <p>hello</p>;

const tabData = [
  {
    label: "Top Rated",
    value: "top-rated",
    desc: (
      <ProductSlider
        isCategoryTitle={false}
        title="Related Products"
        data={data}
      />
    ),
  },
  {
    label: "Top Discount",
    value: "top-discount",
    desc: <Desc />,
  },
  {
    label: "Top Selling",
    value: "top-selling",
    desc: <Desc />,
  },
];

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <MyCarousel />
      <div className="mx-auto max-w-7xl px-8 2xl:px-0 flex flex-col gap-12 mt-14">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 2xl:grid-cols-4">
          <FlashCard />
          <FlashCard />
          <FlashCard />
          <FlashCard />
        </div>
        <MyTab data={tabData} />
      </div>
      <FeaturedSection />
      <div className="mx-auto max-w-7xl px-8 2xl:px-0">
        {/* card  */}
        {children}
      </div>
    </>
  );
}
