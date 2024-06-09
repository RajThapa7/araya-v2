"use client";
import { useAuth } from "@/Providers/AuthProvider";
import useAddProductToCart from "@/api/hooks/cart/useAddProductToCart";
import useAddProductToWishlist from "@/api/hooks/wishlist/useAddProduct";
import useFetchWishlist from "@/api/hooks/wishlist/useFetchWishlist";
import useRemoveProductFromWishlist from "@/api/hooks/wishlist/useRemoveProductFromWishlist";
import { IProductData } from "@/types";
import classNames from "@/utils/classNames";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SyntheticEvent, useCallback, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { toast } from "react-toastify";
import ErrorHandler from "../ErrorHandler/ErrorHandler";
import MyButton from "../MyButton";
import QuantityInput from "../QuantityInput";
import { MyRating } from "../Rating";

export default function ProductShortDescription({
  className,
  data,
}: {
  className?: string;
  data: IProductData;
}) {
  const getDescriptionFromArray = useCallback((str: string): string[][] => {
    const array = str.split(";").map((item) => item.split(":"));
    return array;
  }, []);

  const productDescription = getDescriptionFromArray(data.productHighlight);

  const [quantity, setQuantity] = useState(1);

  const [clicked, setClicked] = useState(false);
  const { token, user } = useAuth();
  const isLoggedIn = !!token;
  const wishlistMutation = useAddProductToWishlist();
  const removeWishlistMutation = useRemoveProductFromWishlist();

  const cartMutation = useAddProductToCart();

  const { data: wishlistItems } = useFetchWishlist(user?._id);
  const isInWishlist = wishlistItems?.products.some(
    (item) => item._id === data._id
  );

  const router = useRouter();

  const handleWishlistRemove = (e: SyntheticEvent) => {
    removeWishlistMutation.mutate(
      { userId: user._id, productId: data._id },
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
      }
    );
    e.stopPropagation();
  };

  const handleWishlistClick = (e: SyntheticEvent) => {
    if (!isLoggedIn) {
      return toast.warn("log in to add item to wishlist", {
        onClick: () => {
          router.push("/store/login");
        },
      });
    }

    wishlistMutation.mutate(
      { userId: user._id, productId: data._id },
      {
        onSuccess: (data) => {
          toast.success(data.message, {
            onClick: () => {
              router.push("/store/wishlist");
            },
          });
          setClicked(true);
        },
        onError: (error) => ErrorHandler(error),
      }
    );
    e.stopPropagation();
  };

  const handleCartPress = (e: SyntheticEvent) => {
    if (!isLoggedIn) {
      return toast.warn("log in to add item to cart", {
        onClick: () => {
          router.push("/store/login");
        },
      });
    }

    cartMutation.mutate(
      { userId: user._id, productId: data._id },
      {
        onSuccess: (data) => {
          toast.success(data.message, {
            onClick: () => {
              router.push("/store/cart");
            },
          });
        },
        onError: (error) => ErrorHandler(error),
      }
    );
    e.stopPropagation();
  };
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
          <MyRating value={Math.floor(data.average_rating || 0)} />
          {data.average_rating ? (
            <>
              <p className="text-sm font-semibold text-header">
                {(data.average_rating || 0).toFixed(2)}
              </p>
              <Link
                href={"#"}
                className="transition-smooth text-gray-600 hover:text-gray-900"
              >
                ({data.ratingCount} Customer Reviews)
              </Link>
            </>
          ) : (
            <p className="text-body">No reviews</p>
          )}
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
          {/* fav buttons */}
          <button
            className={` bg-red-50 group/heart rounded-full p-1.5 text-gray-900 transition hover:text-gray-900/75  active:bg-green-300 ${
              isInWishlist ? "flex" : "hidden"
            }`}
            onClick={(e) => {
              handleWishlistRemove(e);
            }}
          >
            <AiFillHeart
              className={`text-xl ${
                isInWishlist
                  ? clicked
                    ? "animate-grow-wiggle text-red-300"
                    : "text-red-300"
                  : "text-white animate-shrink-wiggle"
              }`}
            />
          </button>
          <button
            className={`bg-gray-50 group/heart rounded-full p-1.5 text-gray-900 transition hover:text-gray-900/75 ${
              isInWishlist ? "hidden" : "flex"
            }`}
            onClick={(e) => handleWishlistClick(e)}
          >
            <AiOutlineHeart
              className={`text-xl text-gray-500 group-hover/heart:text-accent ${
                !isInWishlist && "animate-shrink-wiggle"
              }`}
            />
          </button>
          {/* fav buttons */}
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
        {data.reducedPrice ? (
          <div>
            <p className="mt-1.5 text-3xl text-red-500">
              Rs. {data.reducedPrice}
            </p>
            <div className="flex flex-row items-center gap-2">
              <p className="text-lg text-gray-500 line-through">
                Rs.{data.price}
              </p>
              <p className="text-gray-900">-{data.discountPercentage}%</p>
            </div>
          </div>
        ) : (
          <p className="mt-1.5 text-3xl text-header">Rs. {data.price}</p>
        )}
        <QuantityInput {...{ quantity, setQuantity }} />
        <div className="flex flex-row gap-4">
          <MyButton className="!py-4">Buy Now</MyButton>
          <MyButton isSecondary className="!py-4" onClick={handleCartPress}>
            Add to cart
          </MyButton>
        </div>
      </div>
    </div>
  );
}
