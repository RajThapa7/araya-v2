"use client";
import useFetchProductBySearchTerm from "@/api/hooks/products/useFetchProductBySearchTerm";
import { montserrat } from "@/app/fonts";
import ProductCard from "@/components/ProductCard/ProductCard";
import CardSkeletal from "@/components/Skeletal/CardSkeletal";
import { Option, Select } from "@material-tailwind/react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const SearchPage = () => {
  const [sortValue, setSortValue] = useState("price");
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("query");

  const { data, isLoading } = useFetchProductBySearchTerm();

  return (
    <div>
      <div className="mb-8 flex flex-row items-center justify-between">
        <p>
          {data?.count} items found for{" "}
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

      {isLoading && <CardSkeletal />}

      {/* product lists */}
      <div className="grid grid-cols-1 place-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {!isLoading &&
          data?.data.map(
            ({
              price,
              average_rating,
              ratingCount,
              title,
              reducedPrice,
              tag,
              _id,
              featured_img,
            }) => (
              <ProductCard
                averageRating={average_rating}
                ratingCount={ratingCount}
                id={_id}
                {...{ price, reducedPrice, tag, title }}
                img={featured_img}
                key={_id}
              />
            ),
          )}
      </div>
    </div>
  );
};

export default SearchPage;
