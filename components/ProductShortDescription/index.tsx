"use client";
import { IProductData } from "@/types";
import classNames from "@/utils/classNames";
import Link from "next/link";
import { useCallback, useState } from "react";
import { FiHeart } from "react-icons/fi";
import MyButton from "../MyButton";
import QuantityInput from "../QuantityInput";
import { MyRating } from "../Rating";
import { MyTooltip } from "../Tooltip/Tooltip";

export default function ProductShortDescription({
  className,
  data,
}: {
  className?: string;
  data: IProductData;
}) {
  const reducedPrice = 800;
  const price = 999;

  const getDescriptionFromArray = useCallback((str: string): string[][] => {
    const array = str.split(";").map((item) => item.split(":"));
    return array;
  }, []);

  const productDescription = getDescriptionFromArray(data.productHighlight);

  const discountPercentage = Math.round(((price - reducedPrice) * 100) / price);
  const [quantity, setQuantity] = useState(1);
  return (
    <div className={classNames(className, "")}>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <Link
            href={"#"}
            className="transition-smooth text-sm text-gray-600 hover:text-gray-900"
          >
            {data.category.categoryName}
          </Link>
          <h2 className="text-2xl font-semibold text-gray-800">{data.title}</h2>
        </div>

        <div className="flex flex-row items-center gap-2">
          <MyRating value={4} />
          <Link
            href={"#"}
            className="transition-smooth text-gray-600 hover:text-gray-900"
          >
            (3 Customer Reviews)
          </Link>
        </div>
        <div className="flex flex-row items-center gap-10">
          <div className="flex flex-row gap-2">
            <p>Availability :</p>
            {data.isStockAvailable ? (
              <p className="font-semibold text-accent">in Stock</p>
            ) : (
              <p className="font-semibold text-red-500">Out of Stock</p>
            )}
          </div>
          <MyTooltip content="Add to wishlist">
            <button
              className="bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
              onClick={(e) => e.preventDefault()}
            >
              <span className="sr-only">Wishlist</span>
              <FiHeart size={20} />
            </button>
          </MyTooltip>
        </div>
      </div>

      <div className="flex flex-col gap-2 pb-5 pt-8">
        {productDescription.map((item, index) => (
          <div className="text-gray-600" key={index}>
            <div className="flex flex-row gap-2">
              <p>{item[0]}:</p>
              <p>{item[1]}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-8">
        {false ? (
          <div>
            <p className="mt-1.5 text-3xl text-red-500">
              Rs. {data.reducedPrice}
            </p>
            <div className="flex flex-row items-center gap-2">
              <p className="text-lg text-gray-500 line-through">
                Rs.{data.price}
              </p>
              <p className="text-gray-900">-{discountPercentage}%</p>
            </div>
          </div>
        ) : (
          <p className="mt-1.5 text-3xl text-header">Rs. {data.price}</p>
        )}
        <QuantityInput {...{ quantity, setQuantity }} />
        <div className="flex flex-row gap-4">
          <MyButton className="!py-4">Buy Now</MyButton>
          <MyButton isSecondary className="!py-4">
            Add to cart
          </MyButton>
        </div>
      </div>
    </div>
  );
}
