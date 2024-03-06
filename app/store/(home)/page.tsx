"use client";
import FlashCard from "@/components/FlashCard/FlashCard";
import { MyTab } from "@/components/MyTab/MyTab";
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
export default function Page() {
  return (
    <div className="flex flex-col gap-10 pt-10">
      {/* card  */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 2xl:grid-cols-4">
        <FlashCard />
        <FlashCard />
        <FlashCard />
        <FlashCard />
      </div>

      <MyTab data={tabData} />

      <ProductSlider title="Related Products" data={data} />
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
