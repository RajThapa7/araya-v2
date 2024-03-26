"use client";
import ProductSlider from "@/components/ProductSlider/ProductSlider";
import { data } from "@/data/productData";
import useScrollToTop from "@/hooks/useScrollToTop";

export default function Page() {
  useScrollToTop();
  return (
    <div className="flex flex-col gap-10 pt-24 pb-14">
      <ProductSlider
        title="Trending Products"
        cardType="small"
        breakpoints={{
          850: {
            slidesPerView: 2,
            grid: {
              fill: "row",
              rows: 1,
            },
          },
          1400: {
            slidesPerView: 3,
            grid: {
              fill: "row",
              rows: 1,
            },
          },
        }}
        data={data}
      />
      <ProductSlider title="Recommend for you" data={data} />
    </div>
  );
}
