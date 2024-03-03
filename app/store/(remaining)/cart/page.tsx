"use client";
import MyButton from "@/components/Button/Button";
import MyCheckbox from "@/components/MyCheckbox/MyCheckbox";
import MyInput from "@/components/MyInput/MyInput";
import QuantityInput from "@/components/QuantityInput";
import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import { FiTrash2 } from "react-icons/fi";

export default function Cart() {
  const reducedPrice = 100;
  const price = 200;
  const discountPercentage = 10;
  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      <div className="flex flex-1 flex-col">
        <div className="mb-4 flex flex-row justify-between bg-white py-1 pr-2 shadow-sm">
          <div className="inline-flex items-center">
            <MyCheckbox />
            <p className="text-xs text-gray-800">SELECT ALL ITEMS</p>
          </div>
          <button
            className="inline-flex items-center gap-1 rounded-full p-1.5 text-gray-900 transition hover:text-gray-900/75"
            // onClick={handleWishlistClick}
          >
            <FiTrash2 className="text-lg text-gray-500" />
            <p className="text-xs text-gray-600">DELETE</p>
          </button>
        </div>

        {Array.from({ length: 2 }).map(() => (
          <div
            className="bg flex h-fit flex-1 flex-col items-start gap-6 border-b-2 bg-white pb-2 pr-6 pt-5 shadow-sm last:border-b-0 md:flex-row"
            key={"1"}
          >
            <div className="flex min-w-[50%] flex-row gap-2">
              <MyCheckbox />
              <div className="relative -mt-4 aspect-square min-w-[8rem]">
                <Image
                  alt="item"
                  fill
                  className="object-contain"
                  src={
                    "https://transvelo.github.io/electro-html/2.0/assets/img/150X140/img1.jpg"
                  }
                />
              </div>
              <p className="text-sm">
                Zeblaze GTR 3 Pro SmartWatch | Ultra HD Amoled Display |
                Bluetooth Calling | IP68 Water Resistance
              </p>
            </div>

            <div className="inline-flex w-full justify-between gap-8 pl-10 md:w-fit md:pl-0">
              <div className="flex flex-col gap-1">
                <p className="text-left text-lg text-red-500">
                  Rs.{reducedPrice}
                </p>
                <div className="flex flex-row gap-2">
                  <p className="text-sm text-gray-500 line-through">
                    Rs.{price}
                  </p>
                  <p className="text-sm text-gray-900">
                    -{discountPercentage}%
                  </p>
                </div>

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
                <QuantityInput />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex h-fit w-full flex-col gap-3 bg-white p-4 shadow-sm lg:w-fit">
        <p className="text-md font-semibold text-gray-800">Order Summary</p>
        <div className="flex flex-row justify-between">
          <p className="text-sm text-gray-800">Subtotal (0 items)</p>
          <p className="">Rs. 13,101</p>
        </div>
        <div className="inline-flex gap-2">
          <MyInput placeholder="Enter voucher" className="" />
          <MyButton>Apply</MyButton>
        </div>
        <div className="flex flex-row justify-between">
          <p className="text-sm font-semibold">Total</p>
          <p className="font-semibold text-orange-700">Rs. 13,101</p>
        </div>
        <MyButton className="w-full !py-4">Proceed to Checkout</MyButton>
      </div>
    </div>
  );
}
