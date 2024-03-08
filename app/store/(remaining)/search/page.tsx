"use client";
import { montserrat } from "@/app/fonts";
import ProductCard from "@/components/ProductCard/ProductCard";
import { IProductCard } from "@/types";
import { Option, Select } from "@material-tailwind/react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
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
  const [sortValue, setSortValue] = useState("price");
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("query");
  return (
    <div>
      <div className="mb-8 flex flex-row justify-between items-center">
        <p>
          100 items found for{" "}
          <span className="text-accent-dark">{searchTerm}</span>
        </p>
        <div>
          <Select
            label="Sort by"
            value={sortValue}
            color="green"
            className={montserrat.className}
            onChange={(val) => setSortValue(val || "")}
          >
            <Option value="price">Price</Option>
            <Option value="rating">Ratings</Option>
          </Select>
        </div>
      </div>

      {/* product lists */}
      <div className="flex flex-wrap gap-4">
        {data.map(({ img, price, title, reducedPrice, tag }, index) => (
          <ProductCard
            {...{ img, price, reducedPrice, tag, title }}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Demo;
