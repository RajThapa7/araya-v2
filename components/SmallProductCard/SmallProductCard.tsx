import arayaLogo from "@/public/footer-logo.svg";
import type { IProductCard } from "@/types";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import { MyTooltip } from "../Tooltip/Tooltip";

export default function SmallProductCard({
  img,
  price,
  title,
  reducedPrice,
  tag,
}: IProductCard) {
  const discountPercentage =
    reducedPrice && Math.round(((price - reducedPrice) * 100) / price);
  const [isHover, setIsHover] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | StaticImageData>(img);

  const handleError = () => {
    setImageSrc(arayaLogo);
  };
  return (
    <Link
      href={"/login"}
      className="transition-smooth group relative flex h-fit w-full max-w-xl flex-row overflow-hidden bg-white outline outline-1 outline-gray-100 hover:outline-accent-dark"
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {isHover && (
        <>
          <MyTooltip content="Add to wishlist">
            <button
              className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75 group/heart"
              onClick={(e) => e.preventDefault()}
            >
              <AiOutlineHeart className="text-lg text-gray-500 group-hover/heart:text-accent" />
            </button>
          </MyTooltip>
          <MyTooltip content="Quick View" placement="bottom">
            <button
              className="absolute end-4 top-12 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75 group/eye"
              onClick={(e) => e.preventDefault()}
            >
              <AiOutlineEye className="text-lg text-gray-500 group-hover/eye:text-accent" />
            </button>
          </MyTooltip>
        </>
      )}
      <div className="flex w-1/2 flex-1">
        <div className="relative aspect-video w-full">
          <Image
            src={imageSrc}
            onError={handleError}
            alt="profile"
            fill
            className="object-contain transition duration-500 group-hover:scale-105"
            sizes="(min-width: 480px) 384px, calc(92.5vw - 42px)"
          />
        </div>
      </div>

      <div className="relative flex w-1/2 flex-1 flex-row items-end justify-between bg-white p-6">
        <div className="flex flex-col">
          <span className="w-fit whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
            {tag}
          </span>

          <h3 className="transition-smooth mt-4 text-lg font-semibold text-header group-hover:text-accent-dark text-left">
            {title}
          </h3>

          {reducedPrice ? (
            <>
              <p className="mt-1.5 text-left text-lg text-red-500">
                Rs.{reducedPrice}
              </p>
              <div className="flex flex-row items-center justify-start gap-2">
                <p className="text-sm text-gray-500 line-through">Rs.{price}</p>
                <p className="text-sm text-gray-900">-{discountPercentage}%</p>
              </div>
            </>
          ) : (
            <p className=" mt-1.5 text-left text-lg text-gray-700">
              Rs.{price}
            </p>
          )}
        </div>

        <div className="transition-smooth h-fit w-fit rounded-full bg-gray-200 p-2 group-hover:bg-accent">
          <MyTooltip content="Add to cart">
            <ShoppingCartIcon
              width={20}
              color="white"
              onClick={(e) => e.preventDefault()}
            />
          </MyTooltip>
        </div>
      </div>
    </Link>
  );
}
