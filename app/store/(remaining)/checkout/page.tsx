"use client";
import useFetchDeliveryAddress from "@/api/hooks/delivery-address/useFetchDeliveryAddress";
import MyButton from "@/components/MyButton";
import PaymentMethodSelector from "@/features/store/checkout/paymentMethodSelector";
import AddNewAddress from "@/features/store/delivery-location/addNewAddress";
import { openModal } from "@/lib/modal/modalSlice";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { useDispatch } from "react-redux";

export default function Cart() {
  const searchParams = useSearchParams();
  const products = JSON.parse(
    decodeURIComponent(searchParams.get("products") as string),
  );

  const totalPrice = searchParams.get("totalPrice");

  const dispatch = useDispatch();

  const deliveryAddress = useFetchDeliveryAddress();

  const [deliveryId, setDeliveryId] = useState<string>();

  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      <div className="flex flex-1 flex-col">
        <div className="mb-4 flex flex-row justify-between">
          <p className="mb-4 font-semibold">Please select a delivery address</p>
          <p
            onClick={() =>
              dispatch(
                openModal({
                  content: <AddNewAddress />,
                }),
              )
            }
            className="flex cursor-pointer flex-row items-center gap-1 hover:text-accent"
          >
            <IoIosAdd size={22} className="text-accent" />
            Add New Address
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {deliveryAddress.data?.data.map(
            ({ _id, area, city, label, landmark, name, number, province }) => (
              <div
                onClick={() => setDeliveryId(_id)}
                key={_id}
                className={`flex cursor-pointer flex-col justify-between gap-4 rounded-md bg-white px-6 py-6 text-sm shadow-sm ${deliveryId === _id && "ring-1 ring-accent"}`}
              >
                <p>Deliver to: {name}</p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <div className="flex flex-row gap-3">
                    <p className="h-fit w-fit bg-accent/20 px-1.5 py-0.5 text-xs text-accent-dark">
                      {label}
                    </p>
                    <div className="flex flex-row">
                      <p className="pr-1.5">{number}</p>
                      <p className="border-l-[1px] border-gray-400 pl-1.5">
                        {area}, {city}, {province} Province, near {landmark}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>

        <div className="mt-6 rounded-xl shadow-sm">
          {products.map(
            ({
              _id,
              quantity,
              featured_img,
              title,
              price,
              reducedPrice,
            }: any) => {
              return (
                <div
                  className="bg flex h-fit flex-1 flex-col items-start gap-6 border-b-2 bg-white px-6 pb-2 pt-5 last:border-b-0 md:flex-row"
                  key={_id}
                >
                  <div className="flex min-w-[50%] flex-row gap-2">
                    {/* <MyCheckbox /> */}
                    <div className="relative -mt-4 aspect-square min-w-[8rem]">
                      <Image
                        alt="item"
                        fill
                        className="object-contain"
                        src={featured_img}
                      />
                    </div>
                    <p className="text-sm">{title}</p>
                  </div>

                  <div className="inline-flex w-full justify-between gap-8 pl-10 md:w-fit md:pl-0">
                    <div className="text-sm">
                      <p>Qty:{quantity}</p>
                    </div>

                    {reducedPrice ? (
                      <div className="flex flex-col gap-2">
                        <p className="text-left text-lg text-red-500">
                          Rs.{reducedPrice}
                        </p>
                        <div className="flex flex-row items-center justify-center gap-2">
                          <p className="text-sm text-gray-500 line-through">
                            Rs.{price}
                          </p>
                          <p className="text-sm text-gray-900">
                            -{(100 * (price - reducedPrice)) / price}%
                          </p>
                        </div>
                      </div>
                    ) : (
                      <p className="text-left text-lg text-gray-700">
                        Rs.{price}
                      </p>
                    )}
                  </div>
                </div>
              );
            },
          )}
        </div>
      </div>

      <div className="flex h-fit w-full flex-col gap-3 rounded-md bg-white p-4 shadow-sm lg:w-[350px]">
        <p className="text-md font-semibold text-gray-800">Order Summary</p>
        <div className="flex flex-row justify-between">
          <p className="text-sm text-gray-800">
            Subtotal ({products.length} items)
          </p>
          <p className="">Rs. {totalPrice}</p>
        </div>
        <div className="flex flex-row justify-between">
          <p className="text-sm font-semibold">Total</p>
          <p className="font-semibold text-red-500">Rs. {totalPrice}</p>
        </div>
        <MyButton
          disabled={!deliveryId}
          className="w-full !py-4"
          onClick={() => {
            dispatch(
              openModal({
                content: <PaymentMethodSelector />,
              }),
            );
          }}
        >
          Place Order
        </MyButton>
      </div>
    </div>
  );
}
