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
    <div className="justify-center bg-gray-200 py-12 md:py-20">
      <div className="mx-auto flex max-w-7xl flex-col justify-between px-0 2xl:flex-row">
        <div className="flex flex-1">
          <div className="relative aspect-video w-full">
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
        <div className="w-full md:px-10 2xl:w-1/2 2xl:px-0">
          <ProductSlider
            title="Featured Products"
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
