"use client";
import MyButton from "@/components/Button/Button";
import esewa from "@/public/esewa.png";
import { Alert, Typography } from "@material-tailwind/react";
import Image from "next/image";
import { useState } from "react";
import { AiFillInfoCircle } from "react-icons/ai";

const Esewa = () => (
  <div className="flex flex-col gap-4 text-sm">
    <p>
      You will be redirected to your eSewa account to complete your payment:
    </p>
    <ol className="list-inside list-decimal">
      <li>Login to your eSewa account using your eSewa ID and your Password</li>
      <li>Ensure your eSewa account is active and has sufficient balance</li>
      <li>
        Enter OTP (one time password) sent to your registered mobile number
      </li>
    </ol>
    <p> ***Login with your eSewa mobile and PASSWORD (not MPin)***</p>
    <MyButton className="mt-6 w-fit !px-20 !py-4 text-sm">Pay Now</MyButton>
  </div>
);

const IMEPAY = () => (
  <div className="flex flex-col gap-4 text-sm">
    <p>
      You will be redirected to your IME Pay account to complete your payment
    </p>
    <ol className="list-inside list-decimal">
      <li>Login to your IME Pay account using your IME Pay ID and your PIN.</li>
      <li>Ensure your IME Pay account is active and has sufficient balance.</li>
      <li>
        Enter OTP (one time password) sent to your registered mobile number.
      </li>
    </ol>
    <p> ***Login with your IME Pay mobile and PIN.***</p>
    <MyButton className="mt-6 w-fit !px-20 !py-4 text-sm">Pay Now</MyButton>
  </div>
);

const Cash = () => (
  <div className="flex flex-col gap-4">
    <p className="text-sm">
      You can pay in cash to our courier when you receive the goods at your
      doorstep.
    </p>
    <Alert
      variant="filled"
      className="bg-blue-50"
      icon={<AiFillInfoCircle size={20} className="text-blue-500" />}
    >
      <Typography className="text-sm font-medium text-blue-500">
        Cash Payment Fee of Rs. 10 applies only to Cash on Delivery payment
        method. There is no extra fee when using other payment methods.
      </Typography>
    </Alert>
    <MyButton className="mt-6 w-fit !px-20 !py-4 text-sm">
      Confirm Order
    </MyButton>
  </div>
);

const data = [
  {
    id: 0,
    component: <Esewa />,
  },
  {
    id: 1,
    component: <Esewa />,
  },
  {
    id: 2,
    component: <IMEPAY />,
  },
  {
    id: 3,
    component: <Cash />,
  },
];

export default function Cart() {
  const [activeIndex, setActiveIndex] = useState(-1);
  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      <div className="flex flex-1 flex-col">
        <p className="mb-6 text-xl font-semibold text-gray-800">
          Select Payment Method
        </p>
        <div>
          <div className="flex flex-row gap-1">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className="cursor-pointer"
              >
                <div
                  className={`${
                    activeIndex === index ? "bg-white" : "bg-gray-100"
                  } flex h-fit w-fit flex-col items-center gap-4 px-4 pb-4 pt-8`}
                >
                  <Image src={esewa} alt="logo" width={30} height={30} />
                  <p className="text-xs font-medium text-gray-900">
                    eSewa Mobile Wallet
                  </p>
                </div>
              </div>
            ))}
          </div>
          {data.map(({ component, id }) => (
            <div
              key={id}
              className={`bg-white p-10 ${
                activeIndex === id ? "flex" : "hidden"
              }`}
            >
              {component}
            </div>
          ))}
        </div>
      </div>

      <div className="flex h-fit w-full flex-col gap-3 rounded-md bg-white p-6 shadow-sm lg:w-[350px]">
        <p className="text-md font-semibold text-gray-800">Order Summary</p>
        <div className="flex flex-row justify-between">
          <p className="text-sm text-gray-800">Subtotal (0 items)</p>
          <p className="">Rs. 13,101</p>
        </div>
        <div className="flex flex-row justify-between">
          <p className="text-sm font-semibold">Total</p>
          <p className="font-semibold text-orange-700">Rs. 13,101</p>
        </div>
      </div>
    </div>
  );
}
