import ProductSlider from "@/components/ProductSlider/ProductSlider";
import { IProductCard } from "@/types";
import Image from "next/image";

const data: IProductCard[] = [
  {
    img: "https://transvelo.github.io/electro-html/2.0/assets/img/150X140/img1.jpg",
    price: 999,
    reducedPrice: 800,
    title: "Ipad Pro 2023",
    tag: "Latest",
  },
  {
    img: "https://transvelo.github.io/electro-html/2.0/assets/img/150X140/img1.jpg",
    price: 999,
    // reducedPrice: 800,
    title: "Ipad Pro 2023",
    tag: "Latest",
  },
  {
    img: "https://transvelo.github.io/electro-html/2.0/assets/img/150X140/img1.jpg",
    price: 999,
    // reducedPrice: 800,
    title: "Ipad Pro 2023",
    tag: "Latest",
  },
  {
    img: "https://transvelo.github.io/electro-html/2.0/assets/img/150X140/img1.jpg",
    price: 999,
    reducedPrice: 800,
    title: "Ipad Pro 2023",
    tag: "Latest",
  },
  {
    img: "https://transvelo.github.io/electro-html/2.0/assets/img/150X140/img1.jpg",
    price: 999,
    reducedPrice: 800,
    title: "Ipad Pro 2023",
    tag: "Latest",
  },
  {
    img: "https://transvelo.github.io/electro-html/2.0/assets/img/150X140/img1.jpg",
    price: 999,
    reducedPrice: 800,
    title: "Ipad Pro 2023",
    tag: "Latest",
  },
];

export default function StoreFeaturedSection() {
  return (
    <div className=" bg-gray-200 px-8 flex flex-col justify-center py-20">
      <div className="flex flex-col 2xl:flex-row">
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
            data={data}
            cardType="small"
          />
        </div>
      </div>
    </div>
  );
}
