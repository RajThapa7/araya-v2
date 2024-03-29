"use client";
import Empty from "@/components/Empty/Empty";
import MyButton from "@/components/MyButton";
import MyCheckbox from "@/components/MyCheckbox/MyCheckbox";
import MyInput from "@/components/MyInput/MyInput";
import ProductSlider from "@/components/ProductSlider/ProductSlider";
import QuantityInput from "@/components/QuantityInput";
import { data } from "@/data/productData";
import { IProductCard } from "@/types";
import { mergeTwoArray } from "@/utils/utilsFunction";
import { useRouter } from "next-nprogress-bar";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FiTrash2 } from "react-icons/fi";

export default function Cart() {
  const [selected, setSelected] = useState<{ id: number; quantity: number }[]>(
    []
  );

  const selectedItemCount = selected.reduce(
    (prev, curr) => prev + curr.quantity,
    0
  );

  const totalPrice = mergeTwoArray(data, selected, "id")
    .filter((outer) => {
      return selected.some(({ id }) => id === outer.id);
    })
    .reduce(
      (prev, curr) => prev + (curr.reducedPrice || curr.price) * curr.quantity,
      0
    );

  return (
    <div className="flex flex-col gap-20">
      <Empty
        title="Your cart is empty"
        className={data.length === 0 ? "flex" : "hidden"}
      />

      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="flex flex-1 flex-col">
          <p className="text-2xl text-body font-semibold capitalize mb-8">
            My Cart
          </p>

          <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between bg-transparent py-1 pr-2">
            <div className="inline-flex items-center">
              <MyCheckbox
                color="green"
                onChange={(e) => {
                  if (e.target.checked) {
                    return setSelected(
                      data.map(({ id }) => ({ id, quantity: 1 }))
                    );
                  }
                  setSelected([]);
                }}
              />
              <p className="text-xs text-body">SELECT ALL ITEMS</p>
              <p
                className={`${
                  selected.length !== 0 ? "flex" : "hidden"
                } text-accent text-sm ml-4`}
              >
                {selected.length} items selected
              </p>
            </div>
            <div className="flex flex-row gap-2 ml-1 md:ml-0">
              <button
                className="inline-flex items-center gap-1 rounded-full p-1.5 text-body transition hover:text-accent"
                // onClick={handleWishlistClick}
              >
                <FiTrash2 className="text-lg text-gray-500" />
                <p className="text-xs">REMOVE</p>
              </button>
            </div>
          </div>

          {/* cart items */}
          {data.map((item) => (
            <CartItem
              item={item}
              key={item.id}
              selected={selected}
              setSelected={setSelected}
            />
          ))}
        </div>

        {/* checkout menu */}
        <div className="flex h-fit w-full max-w-lg rounded-md flex-col gap-3 bg-white p-4 shadow-sm lg:mt-32 lg:w-fit">
          <p className="text-md font-semibold text-gray-800">Order Summary</p>
          <div className="flex flex-row justify-between">
            <p className="text-sm text-gray-800">
              Subtotal ({selectedItemCount} items)
            </p>
            <p className="">Rs. {totalPrice.toLocaleString("en-IN")}</p>
          </div>
          <div className="inline-flex gap-2">
            <MyInput placeholder="Enter voucher" className="" />
            <MyButton>Apply</MyButton>
          </div>
          <div className="flex flex-row justify-between">
            <p className="text-sm font-semibold">Total</p>
            <p className="font-semibold text-orange-700">
              Rs. {totalPrice.toLocaleString("en-IN")}
            </p>
          </div>
          <MyButton className="w-full !py-4">Proceed to Checkout</MyButton>
        </div>
      </div>
      <ProductSlider data={data} title="Picks for you" />
    </div>
  );
}

const CartItem = ({
  item,
  selected,
  setSelected,
}: {
  item: IProductCard;
  selected: {
    id: number;
    quantity: number;
  }[];
  setSelected: Dispatch<
    SetStateAction<
      {
        id: number;
        quantity: number;
      }[]
    >
  >;
}) => {
  const [quantity, setQuantity] = useState(1);
  const { id, img, price, reducedPrice, title } = item;
  const router = useRouter();
  const discountPercentage = 10;

  console.log(selected, "selected");

  const onQuantityChange = (count: number) => {
    setSelected((prev) => {
      let currIndex = prev.findIndex(({ id: currId }) => currId === id);
      prev.splice(currIndex, 1);
      return [...prev, { id, quantity: count }];
    });
  };

  return (
    <div
      className={`flex h-fit flex-1 flex-col items-start justify-between gap-6 border-b-2 bg-white pb-2 pr-6 pt-5 shadow-sm last:border-b-0 md:flex-row`}
      key={id}
    >
      <div className="flex flex-row gap-2 w-full md:flex-1">
        <MyCheckbox
          checked={selected.some(({ id: selectedId }) => selectedId === id)}
          color="green"
          onChange={(e) => {
            setSelected(() => {
              // add selected value to the array
              if (e.target.checked) {
                return [...selected, { id, quantity }];
              }
              // if unselected remove the value from the array
              return selected.filter((item) => item.id !== id);
            });
          }}
        />
        <div className="relative -mt-4 aspect-square min-w-[8rem]">
          <Image alt="item" fill className="object-contain" src={img} />
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
              // onClick={handleWishlistClick}
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
