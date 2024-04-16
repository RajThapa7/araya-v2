"use client";
import { useAuth } from "@/Providers/AuthProvider";
import useAddProductToWishlist from "@/api/hooks/wishlist/useAddProduct";
import useFetchWishlist from "@/api/hooks/wishlist/useFetchWishlist";
import useFetchRemoveProductFromWishlist from "@/api/hooks/wishlist/useRemoveProductFromWishlist";
import ProductModal from "@/features/ProductModal/ProductModal";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import arayaLogo from "@/public/footer-logo.svg";
import type { IProductCard } from "@/types";
import classNames from "@/utils/classNames";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next-nprogress-bar";
import Image, { StaticImageData } from "next/image";
import { usePathname } from "next/navigation";
import { SyntheticEvent, useState } from "react";
import { AiFillHeart, AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import { IoIosStar } from "react-icons/io";
import { toast } from "react-toastify";
import ErrorHandler from "../ErrorHandler/ErrorHandler";
import { MyTooltip } from "../Tooltip/Tooltip";

export default function SmallProductCard({
  img,
  price,
  title,
  reducedPrice,
  tag,
  className,
  id,
  fav = false,
}: IProductCard) {
  const pathname = usePathname();
  const { token, user } = useAuth();
  const isLoggedIn = !!token;
  const dispatch = useAppDispatch();
  const { wishlist } = useAppSelector((store) => store.wishlist);
  // const [isFav, setIsFav] = useState(wishlist.some((item) => item._id === id));
  const [isFav, setIsFav] = useState(fav);

  const { data: wishlistItems } = useFetchWishlist(user._id);
  const isInWishlist = wishlistItems?.products.some((item) => item._id === id);

  const discountPercentage =
    reducedPrice && Math.round(((price - reducedPrice) * 100) / price);
  const [isHover, setIsHover] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | StaticImageData>(img);
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const wishlistMutation = useAddProductToWishlist();
  const removeWishlistMutation = useFetchRemoveProductFromWishlist();

  const handleError = () => {
    setImageSrc(arayaLogo);
  };

  const handleParentClick = (e: SyntheticEvent) => {
    router.push("/store/product");
    e.stopPropagation();
  };

  const handleWishlistRemove = (e: SyntheticEvent, id: string) => {
    e.stopPropagation();
    removeWishlistMutation.mutate(
      { userId: user._id, productId: id },
      {
        onSuccess: (data) => {
          toast.success(data.message, {
            onClick: () => {
              router.push("/store/wishlist");
            },
          });
          setIsFav(false);
          // dispatch(removeWishlistItem({ wishlist: data.list.products }));
        },
        onError: (error) => ErrorHandler(error),
      }
    );
  };

  const handleWishlistClick = (e: SyntheticEvent, id: string) => {
    e.stopPropagation();
    if (!isLoggedIn) {
      return toast.warn("log in to add item to wishlist", {
        onClick: () => {
          router.push("/store/login");
        },
      });
    }

    wishlistMutation.mutate(
      { userId: user._id, productId: id },
      {
        onSuccess: (data) => {
          toast.success(data.message, {
            onClick: () => {
              router.push("/store/wishlist");
            },
          });
          // dispatch(addWishlistItem({ wishlist: data.list.products }));
          setIsFav(true);
        },
        onError: (error) => ErrorHandler(error),
      }
    );
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

  return (
    <>
      <ProductModal productId={id} {...{ open, setOpen }} />
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
            isHover || isInWishlist ? "opacity-100" : "opacity-0"
          }`}
          onClick={(e) => {
            handleWishlistRemove(e, id);
          }}
        >
          <AiFillHeart
            className={`text-lg ${
              isInWishlist
                ? "animate-grow-wiggle text-red-300"
                : "text-white animate-shrink-wiggle"
            }`}
          />
        </button>
        <button
          className={`bg-gray-50 ${
            isHover ? "opacity-100" : "opacity-0"
          } absolute end-4 top-4 z-[99] group/heart rounded-full p-1.5 text-gray-900 transition hover:text-gray-900/75 ${
            isInWishlist ? "hidden" : "flex"
          }`}
          onClick={(e) => handleWishlistClick(e, id)}
        >
          <AiOutlineHeart
            className={`text-lg text-gray-500 group-hover/heart:text-accent ${
              !isInWishlist && "animate-shrink-wiggle"
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
