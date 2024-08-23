"use client";
import { useAuth } from "@/Providers/AuthProvider";
import useAddProductToCart from "@/api/hooks/cart/useAddProductToCart";
import useAddProductToWishlist from "@/api/hooks/wishlist/useAddProduct";
import useFetchWishlist from "@/api/hooks/wishlist/useFetchWishlist";
import useRemoveProductFromWishlist from "@/api/hooks/wishlist/useRemoveProductFromWishlist";
import { montserrat } from "@/app/fonts";
import ProductModal from "@/features/ProductModal/ProductModal";
import { useAppDispatch } from "@/lib/hooks";
import { openModal } from "@/lib/modal/modalSlice";
import arayaLogo from "@/public/footer-logo.svg";
import { IProductCard } from "@/types";
import classNames from "@/utils/classNames";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next-nprogress-bar";
import Image, { StaticImageData } from "next/image";
import { SyntheticEvent, useState } from "react";
import { AiFillHeart, AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import { IoIosStar } from "react-icons/io";
import { toast } from "react-toastify";
import ErrorHandler from "../ErrorHandler/ErrorHandler";

export default function ProductCard({
  img,
  price,
  title,
  reducedPrice,
  tag,
  className,
  id,
  averageRating,
  ratingCount,
}: IProductCard) {
  const [clicked, setClicked] = useState(false);
  const { token, user } = useAuth();
  const isLoggedIn = !!token;

  const discountPercentage =
    reducedPrice && Math.round(((price - reducedPrice) * 100) / price);
  const [isHover, setIsHover] = useState(false);
  const [open, setOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | StaticImageData>(img);

  const wishlistMutation = useAddProductToWishlist();
  const removeWishlistMutation = useRemoveProductFromWishlist();

  const cartMutation = useAddProductToCart();

  const { data: wishlistItems } = useFetchWishlist(user?._id);
  const isInWishlist = wishlistItems?.products.some((item) => item._id === id);

  const handleError = () => {
    setImageSrc(arayaLogo);
  };
  const router = useRouter();

  const dispatch = useAppDispatch();

  const handleParentClick = (e: SyntheticEvent, id: string) => {
    router.push(`/store/product/${id}`);
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
          setClicked(false);
          // dispatch(removeWishlistItem({ wishlist: data.list.products }));
        },
        onError: (error) => ErrorHandler(error),
      },
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
          setClicked(true);
        },
        onError: (error) => ErrorHandler(error),
      },
    );
  };

  const handleQuickViewClick = (e: SyntheticEvent) => {
    dispatch(
      openModal({
        content: <ProductModal productId={id} />,
      }),
    );
    e.stopPropagation();
  };

  const handleCartPress = (e: SyntheticEvent) => {
    e.stopPropagation();
    if (!isLoggedIn) {
      return toast.warn("log in to add item to cart", {
        onClick: () => {
          router.push("/store/login");
        },
      });
    }

    cartMutation.mutate(
      { userId: user._id, productId: id },
      {
        onSuccess: (data) => {
          toast.success(data.message, {
            onClick: () => {
              router.push("/store/cart");
            },
          });
        },
        onError: (error) => ErrorHandler(error),
      },
    );
  };

  return (
    <>
      {/* <ProductModal productId={id} {...{ open, setOpen }} /> */}
      <div
        onClick={(e) => handleParentClick(e, id)}
        className={classNames(
          className,
          `transition-smooth group relative block h-full w-full max-w-sm cursor-pointer overflow-hidden bg-white pt-2 ring-[1px] ring-primary-dark hover:ring-accent ${montserrat.className}`,
        )}
        onMouseOver={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {/* fav buttons */}
        <button
          className={`group/heart absolute end-4 top-3 z-50 rounded-full bg-red-50 p-1.5 text-gray-900 transition hover:text-gray-900/75 active:bg-green-300 ${
            isHover || isInWishlist ? "opacity-100" : "opacity-0"
          }`}
          onClick={(e) => {
            handleWishlistRemove(e, id);
          }}
        >
          <AiFillHeart
            className={`text-lg ${
              isInWishlist
                ? clicked
                  ? "animate-grow-wiggle text-red-300"
                  : "text-red-300"
                : "animate-shrink-wiggle text-white"
            }`}
          />
        </button>
        <button
          className={`bg-gray-50 ${
            isHover ? "opacity-100" : "opacity-0"
          } group/heart absolute end-4 top-3 z-[99] rounded-full p-1.5 text-gray-900 transition hover:text-gray-900/75 ${
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
          className={`group/eye absolute end-4 top-12 z-10 h-fit w-fit rounded-full bg-gray-50 p-1.5 text-gray-900 transition hover:text-gray-900/75 ${
            isHover ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleQuickViewClick}
        >
          <AiOutlineEye className="text-lg text-gray-500 group-hover/eye:text-accent" />
        </button>
        {/* quick view button */}

        <div className="relative mx-auto h-56 w-full">
          <Image
            src={imageSrc}
            onError={handleError}
            alt="product-image"
            fill
            className="object-contain transition duration-500 group-hover:scale-105"
            sizes="(min-width: 480px) 384px, calc(92.5vw - 42px)"
          />
        </div>
        <div className="relative flex flex-row justify-between bg-white p-6">
          <div className="flex flex-col">
            {tag && (
              <span className="w-fit whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                {tag}
              </span>
            )}

            <h3 className="transition-smooth mt-4 text-left text-lg font-semibold leading-tight text-header group-hover:text-accent-dark">
              {title}
            </h3>

            {ratingCount !== 0 && (
              <div className="mt-1 inline-flex items-center gap-2">
                <IoIosStar size={14} className="text-yellow-700" />
                <p className="text-sm text-gray-600">
                  {averageRating?.toFixed(2)}/5 ({ratingCount})
                </p>
                <p className="text-sm text-gray-600">129 sold</p>
              </div>
            )}

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
          <div
            className="transition-smooth h-fit w-fit rounded-full bg-gray-200 p-2 group-hover:bg-accent"
            onClick={(e) => handleCartPress(e)}
          >
            <ShoppingCartIcon width={20} color="white" />
          </div>
        </div>
      </div>
    </>
  );
}
