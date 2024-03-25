import ProductModal from "@/features/ProductModal/ProductModal";
import arayaLogo from "@/public/footer-logo.svg";
import type { IProductCard } from "@/types";
import classNames from "@/utils/classNames";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next-nprogress-bar";
import Image, { StaticImageData } from "next/image";
import { SyntheticEvent, useState } from "react";
import { AiFillHeart, AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import { IoIosStar } from "react-icons/io";
import { toast } from "react-toastify";
import { MyTooltip } from "../Tooltip/Tooltip";

export default function SmallProductCard({
  img,
  price,
  title,
  reducedPrice,
  tag,
  className,
}: IProductCard) {
  const discountPercentage =
    reducedPrice && Math.round(((price - reducedPrice) * 100) / price);
  const [isHover, setIsHover] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | StaticImageData>(img);
  const [open, setOpen] = useState(false);

  const router = useRouter();

  const handleError = () => {
    setImageSrc(arayaLogo);
  };

  const handleParentClick = (e: SyntheticEvent) => {
    router.push("/store/product");
    e.stopPropagation();
  };

  const handleWishlistClick = (e: SyntheticEvent) => {
    e.stopPropagation();
    // Handle "Add to wishlist" button click here
    toast.success("Item added to wishlist", {
      onClick: () => {
        router.push("/store/wishlist");
      },
    });
    setIsFav(true);
  };

  const handleQuickViewClick = (e: SyntheticEvent) => {
    setOpen(true);
    e.stopPropagation();
  };

  const handleCartPress = (e: SyntheticEvent) => {
    e.stopPropagation();
    toast.success("Item added to cart successfully", {
      onClick: () => {
        router.push("/store/cart");
      },
    });
  };

  const [isFav, setIsFav] = useState(false);

  return (
    <>
      <ProductModal {...{ open, setOpen }} />
      <div
        onClick={handleParentClick}
        className={classNames(
          className,
          "transition-smooth group relative flex w-full max-w-xl flex-row overflow-hidden bg-white outline outline-1 outline-gray-100 hover:outline-accent-dark cursor-pointer"
        )}
        onMouseOver={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {/* fav buttons */}
        <button
          className={` bg-red-50 absolute end-4 top-4 group/heart rounded-full p-1.5 text-gray-900 transition hover:text-gray-900/75 z-50 active:bg-green-300 ${
            isHover || isFav ? "opacity-100" : "opacity-0"
          }`}
          onClick={(e) => {
            e.stopPropagation();
            setIsFav((prev) => !prev);
          }}
        >
          <AiFillHeart
            className={`text-lg ${
              isFav
                ? "animate-grow-wiggle text-red-300"
                : "text-white animate-shrink-wiggle"
            }`}
          />
        </button>
        <button
          className={`bg-gray-50 ${
            isHover ? "opacity-100" : "opacity-0"
          } absolute end-4 top-4 z-[99] group/heart rounded-full p-1.5 text-gray-900 transition hover:text-gray-900/75 ${
            isFav ? "hidden" : "flex"
          }`}
          onClick={handleWishlistClick}
        >
          <AiOutlineHeart
            className={`text-lg text-gray-500 group-hover/heart:text-accent ${
              !isFav && "animate-shrink-wiggle"
            }`}
          />
        </button>
        {/* fav buttons */}
        {/* quick view button */}
        <button
          className={`absolute end-4 top-12 z-10 group/eye w-fit h-fit rounded-full bg-gray-50 p-1.5 text-gray-900 transition hover:text-gray-900/75 ${
            isHover ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleQuickViewClick}
        >
          <AiOutlineEye className="text-lg text-gray-500 group-hover/eye:text-accent" />
        </button>
        {/* quick view button */}

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

        <div className="relative flex w-1/2 flex-1 flex-row items-start justify-between bg-white p-6">
          <div className="flex flex-col">
            <span className="w-fit whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
              {tag}
            </span>

            <h3 className="leading-tight transition-smooth mt-4 text-lg font-semibold text-header group-hover:text-accent-dark text-left">
              {title}
            </h3>
            <div className=" inline-flex items-center gap-2 mt-1">
              <IoIosStar size={14} className="text-yellow-700" />
              <p className="text-xs text-gray-600">4.4/5 (23)</p>
              <p className="text-xs text-gray-600">129 sold</p>
            </div>

            {reducedPrice ? (
              <>
                <p className="mt-1.5 text-left text-lg text-red-500">
                  Rs.{reducedPrice}
                </p>
                <div className="flex flex-row items-center justify-start gap-2">
                  <p className="text-sm text-gray-500 line-through">
                    Rs.{price}
                  </p>
                  <p className="text-sm text-gray-900">
                    -{discountPercentage}%
                  </p>
                </div>
              </>
            ) : (
              <p className=" mt-1.5 text-left text-lg text-gray-700">
                Rs.{price}
              </p>
            )}
          </div>
        </div>
        <div className="absolute bottom-8 right-4 transition-smooth h-fit w-fit rounded-full bg-gray-200 p-2 group-hover:bg-accent">
          <MyTooltip content="Add to cart">
            <ShoppingCartIcon
              width={20}
              color="white"
              onClick={(e) => handleCartPress(e)}
            />
          </MyTooltip>
        </div>
      </div>
    </>
  );
}
