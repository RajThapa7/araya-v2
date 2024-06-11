"use client";
import useFetchProductList from "@/api/hooks/products/useFetchProducts";
import ProductSlider from "@/components/ProductSlider/ProductSlider";
import { IProductListData } from "@/types";
import Image from "next/image";

export default function StoreFeaturedSection({
  initialData,
}: {
  initialData: IProductListData;
}) {
  const { data, isLoading } = useFetchProductList(initialData);
  return (
    <div className=" bg-gray-200 flex flex-col justify-center py-20">
      <div className="flex flex-col 2xl:flex-row max-w-7xl px-0 mx-auto justify-between">
        <div className="flex flex-1">
          <div className="relative w-full aspect-video ">
            <Image
              alt="featured-product-image"
              quality={100}
              src={
                "https://transvelo.github.io/electro-html/2.0/assets/img/665X616/img1.png"
              }
              fill
              className="object-contain"
              sizes="(min-width: 480px) 384px, calc(92.5vw - 42px)"
            />
          </div>
        </div>
        <div className="w-full 2xl:w-1/2">
          <ProductSlider
            title="Television"
            breakpoints={{
              700: {
                slidesPerView: 2,
                grid: {
                  fill: "row",
                  rows: 2,
                },
              },
              1000: {
                slidesPerView: 3,
                grid: {
                  fill: "row",
                  rows: 2,
                },
              },
              1320: {
                slidesPerView: 2,
                grid: {
                  fill: "row",
                  rows: 2,
                },
              },
            }}
            data={data?.data || []}
            isLoading={isLoading}
            cardType="small"
          />
        </div>
      </div>
    </div>
  );
}
