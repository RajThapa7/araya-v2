"use client";
import ProductSlider from "@/components/ProductSlider/ProductSlider";
import { IProductCard } from "@/types";

export const data: IProductCard[] = [
  {
    img: "https://transvelo.github.io/electro12-html/2.0/assets/img/150X140/img1.jpg",
    price: 999,
    reducedPrice: 800,
    title: "Ipad Pro latest 10th gen 14' 2023",
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

const Desc = () => <p>hello</p>;

export const tabData = [
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
export default function Page() {
  return (
    <div className="flex flex-col gap-10 pt-10">
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
