"use client";
import useFetchProductUnderCategories from "@/api/hooks/products/useFetchProductUnderCategories";
import { montserrat } from "@/app/fonts";
import { Pagination } from "@/components/Pagination/Pagination";
import ProductCard from "@/components/ProductCard/ProductCard";
import CardSkeletal from "@/components/Skeletal/CardSkeletal";
import usePaginate from "@/hooks/usePaginate";
import { ICategoryListData } from "@/types";
import { kebabCaseToTitle } from "@/utils/utilsFunction";
import { Option, Select } from "@material-tailwind/react";
import { useState } from "react";

const CategoryItemContainer = ({
  category,
  initialData,
}: {
  category: string;
  initialData: ICategoryListData;
}) => {
  const [sortValue, setSortValue] = useState("price");

  const { data, isLoading } = useFetchProductUnderCategories(
    category,
    initialData,
  );

  const { handleCountChange, handlePageClick } = usePaginate();
  return (
    <div>
      <div className="mb-8 flex flex-row items-center justify-between">
        <p className="text-xl font-semibold capitalize text-body md:text-2xl">
          {kebabCaseToTitle(category)}
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
      <div className="grid grid-cols-1 place-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {!isLoading &&
          data?.data.map(
            (
              {
                img,
                price,
                title,
                average_rating,
                ratingCount,
                reducedPrice,
                tag,
                _id,
              },
              index,
            ) => (
              <ProductCard
                {...{ price, reducedPrice, tag, title }}
                img={img[0]}
                id={_id}
                averageRating={average_rating}
                ratingCount={ratingCount}
                key={index}
              />
            ),
          )}
        {isLoading && <CardSkeletal />}
      </div>
      <Pagination
        totalPageCount={data?.totalPages || 0}
        {...{ handleCountChange, handlePageClick }}
      />
    </div>
  );
};

export default CategoryItemContainer;
