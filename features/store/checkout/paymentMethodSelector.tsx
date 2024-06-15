"use client";
import MyButton from "@/components/MyButton";
import EsewaIcon from "@/public/esewa";
import Khalti from "@/public/khalti";
import { Alert, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import { BsCash } from "react-icons/bs";

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
    component: <Cash />,
    icon: <BsCash size={35} />,
  },
  {
    id: 1,
    component: <Esewa />,
    icon: <EsewaIcon />,
  },
  //   {
  //     id: 2,
  //     component: <IMEPAY />,
  //   },
  {
    id: 3,
    component: <IMEPAY />,
    icon: <Khalti />,
  },
];

export default function PaymentMethodSelector() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      <div className="flex flex-1 flex-col">
        <p className="mb-6 text-xl font-semibold text-gray-800">
          Select Payment Method
        </p>
        <div className="min-h-[420px]">
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
                  {/* <Image src={esewa} alt="logo" width={30} height={30} /> */}
                  <Khalti width={60} />
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
    </div>
  );
}
