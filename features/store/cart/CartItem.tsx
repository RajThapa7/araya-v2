"use client";
import MyCheckbox from "@/components/MyCheckbox/MyCheckbox";
import QuantityInput from "@/components/QuantityInput";
import { IProductData } from "@/types";
import { useRouter } from "next-nprogress-bar";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FiTrash2 } from "react-icons/fi";

const CartItem = ({
  item,
  selected,
  setSelected,
  handleCartRemove,
}: {
  item: IProductData;
  selected: {
    id: string;
    quantity: number;
  }[];
  handleCartRemove: (productId: string) => void;
  setSelected: Dispatch<
    SetStateAction<
      {
        id: string;
        quantity: number;
      }[]
    >
  >;
}) => {
  const [quantity, setQuantity] = useState(1);
  const { _id, featured_img, price, reducedPrice, title } = item;
  const router = useRouter();
  const discountPercentage = 10;

  const onQuantityChange = (count: number) => {
    setSelected((prev) => {
      let currIndex = prev.findIndex(({ id: currId }) => currId === _id);
      prev.splice(currIndex, 1);
      return [...prev, { id: _id, quantity: count }];
    });
  };

  return (
    <div
      className={`flex h-fit flex-col items-start justify-between gap-6 border-b-2 bg-primary pb-2 pr-6 pt-5 shadow-sm last:border-b-0 md:flex-row`}
      key={_id}
    >
      <div className="flex flex-row gap-2 w-full md:flex-1">
        <MyCheckbox
          checked={selected.some(({ id: selectedId }) => selectedId === _id)}
          color="green"
          onChange={(e) => {
            setSelected(() => {
              // add selected value to the array
              if (e.target.checked) {
                return [...selected, { id: _id, quantity }];
              }
              // if unselected remove the value from the array
              return selected.filter((item) => item.id !== _id);
            });
          }}
        />
        <div className="relative -mt-4 aspect-square min-w-[8rem]">
          <Image
            alt="item"
            fill
            className="object-contain"
            src={featured_img}
          />
        </div>
        <p
          className="text-sm text-body transition-smooth w-fit h-fit hover:text-accent-dark cursor-pointer"
          onClick={() => router.push("/store/product")}
        >
          {title}
        </p>
      </div>

      {/* price and quantity div */}
      <div className="inline-flex w-full md:flex-1 justify-between gap-8 pl-10 md:pl-0">
        <div className="flex flex-col gap-1">
          {reducedPrice ? (
            <div className=" flex flex-col gap-2">
              <p className="text-left text-lg text-red-500">
                Rs.{reducedPrice}
              </p>
              <div className="flex flex-row items-center justify-center gap-2">
                <p className="text-sm text-gray-500 line-through">Rs.{price}</p>
                <p className="text-sm text-gray-900">-{discountPercentage}%</p>
              </div>
            </div>
          ) : (
            <p className="mt-1.5 text-left text-lg text-gray-700">Rs.{price}</p>
          )}
          <div className="inline-flex">
            <button
              className="rounded-full p-1.5 text-gray-900 transition hover:text-gray-900/75"
              // onClick={handleWishlistClick}
            >
              <AiOutlineHeart className="text-lg text-gray-500" />
            </button>
            <button
              className="rounded-full p-1.5 text-gray-900 transition hover:text-gray-900/75"
              onClick={() => handleCartRemove(_id)}
            >
              <FiTrash2 className="text-lg text-gray-500" />
            </button>
          </div>
        </div>

        <div className="">
          <QuantityInput
            {...{ quantity, setQuantity }}
            onChange={onQuantityChange}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
