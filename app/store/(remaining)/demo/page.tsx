"use client";
import SmallProductCard from "@/components/SmallProductCard/SmallProductCard";
import { IProductCard } from "@/types";
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
    // tag: "Latest",
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
const Demo = () => {
  return (
    <div className="flex flex-wrap gap-4">
      {data.map(({ img, price, title, reducedPrice, tag }, index) => (
        <SmallProductCard
          {...{ img, price, reducedPrice, tag, title }}
          key={index}
        />
      ))}
    </div>
  );
};

export default Demo;
