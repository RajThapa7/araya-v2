"use client";
import classNames from "@/utils/classNames";
import Link from "next/link";
import { FiHeart } from "react-icons/fi";
import MyButton from "../MyButton";
import QuantityInput from "../QuantityInput";
import { MyRating } from "../Rating";
import { MyTooltip } from "../Tooltip/Tooltip";

export default function ProductShortDescription({
  className,
}: {
  className?: string;
}) {
  const reducedPrice = 800;
  const price = 999;

  const discountPercentage = Math.round(((price - reducedPrice) * 100) / price);
  return (
    <div className={classNames(className, "")}>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <Link
            href={"#"}
            className="transition-smooth text-sm text-gray-600 hover:text-gray-900"
          >
            Laptops
          </Link>
          <h2 className="text-2xl font-semibold text-gray-800">
            Tablet White EliteBook Revolve 810 G2
          </h2>
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
            <p className="font-semibold text-red-500">Out of stock</p>
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

      <div className="flex flex-col gap-4 pb-5 pt-8">
        <div className="text-gray-600">
          <div className="flex flex-row gap-2">
            <p>Laptop screen size:</p>
            <p>15.6"</p>
          </div>
          <div className="flex flex-row gap-2">
            <p>Laptop screen size:</p>
            <p>15.6"</p>
          </div>
          <div className="flex flex-row gap-2">
            <p>Laptop screen size:</p>
            <p>15.6"</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        {false ? (
          <div>
            <p className="mt-1.5 text-3xl text-red-500">Rs. {reducedPrice}</p>
            <div className="flex flex-row items-center gap-2">
              <p className="text-lg text-gray-500 line-through">Rs.{price}</p>
              <p className="text-gray-900">-{discountPercentage}%</p>
            </div>
          </div>
        ) : (
          <p className="mt-1.5 text-3xl text-yellow-900">Rs. {price}</p>
        )}
        <QuantityInput />
        <div className="flex flex-row gap-4">
          <MyButton className="!py-4">Buy Now</MyButton>
          <MyButton className="!py-4">Add to cart</MyButton>
        </div>
      </div>
    </div>
  );
}
