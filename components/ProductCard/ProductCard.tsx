"use client";
import ProductModal from "@/features/ProductModal/ProductModal";
import { IProductCard } from "@/types";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";
import { AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import { MyTooltip } from "../Tooltip/Tooltip";

export default function ProductCard({
  img,
  price,
  title,
  reducedPrice,
  tag,
}: IProductCard) {
  const discountPercentage =
    reducedPrice && Math.round(((price - reducedPrice) * 100) / price);
  const [isHover, setIsHover] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleParentClick = (e: SyntheticEvent) => {
    router.push("/store/product");
    e.stopPropagation();
  };

  const handleWishlistClick = (e: SyntheticEvent) => {
    e.stopPropagation();
    // Handle "Add to wishlist" button click here
  };

  const handleQuickViewClick = (e: SyntheticEvent) => {
    setOpen(true);
    e.stopPropagation();
  };

  return (
    <>
      <ProductModal {...{ open, setOpen }} />
      <div
        onClick={handleParentClick}
        className="transition-smooth group relative block h-fit w-full max-w-sm overflow-hidden border-r-0 border-gray-200 bg-white hover:shadow-xl"
        onMouseOver={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {isHover && (
          <>
            <MyTooltip content="Add to wishlist">
              <button
                className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
                onClick={handleWishlistClick}
              >
                <AiOutlineHeart className="text-lg text-gray-500" />
              </button>
            </MyTooltip>
            <MyTooltip content="Quick View" placement="bottom">
              <button
                className="absolute end-4 top-12 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
                onClick={handleQuickViewClick}
              >
                <AiOutlineEye className="text-lg text-gray-500" />
              </button>
            </MyTooltip>
          </>
        )}

        <div className="relative mx-auto aspect-video h-56 w-full">
          <Image
            src={img}
            alt="profile"
            fill
            className="object-contain transition duration-500 group-hover:scale-105"
            sizes="(min-width: 480px) 384px, calc(92.5vw - 42px)"
          />
        </div>

        <div className="relative flex flex-row justify-between bg-white p-6">
          <div className="flex flex-col">
            <span className="w-fit whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
              {tag}
            </span>

            <h3 className="transition-smooth mt-4 text-left text-lg font-semibold text-blue-600 underline decoration-white group-hover:decoration-blue-600">
              {title}
            </h3>

            {reducedPrice ? (
              <div className="mt-1.5 inline-flex gap-2">
                <p className="text-left text-lg text-red-500">
                  Rs.{reducedPrice}
                </p>
                <div className="flex flex-row items-center justify-center gap-2">
                  <p className="text-sm text-gray-500 line-through">
                    Rs.{price}
                  </p>
                  <p className="text-sm text-gray-900">
                    -{discountPercentage}%
                  </p>
                </div>
              </div>
            ) : (
              <p className="mt-1.5 text-left text-lg text-gray-700">
                Rs.{price}
              </p>
            )}
          </div>
          <div className="transition-smooth h-fit w-fit rounded-full bg-gray-200 p-2 group-hover:bg-orange-500">
            <MyTooltip content="Add to cart">
              <ShoppingCartIcon
                width={20}
                color="white"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              />
            </MyTooltip>
          </div>
        </div>
      </div>
    </>
  );
}
