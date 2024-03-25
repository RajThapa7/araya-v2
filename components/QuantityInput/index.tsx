"use client";
import { Dispatch, SetStateAction } from "react";
import MyButton from "../MyButton";

export default function QuantityInput({
  quantity,
  setQuantity,
  onChange,
}: {
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
  onChange?: (count: number) => void;
}) {
  return (
    <div className="flex w-fit flex-row items-center gap-2">
      {/* <p>Quantity</p> */}
      <div className="flex items-center rounded-lg border border-gray-200">
        <MyButton
          onClick={() => {
            setQuantity((prev) => --prev);
            onChange && onChange(quantity - 1);
          }}
          disabled={quantity == 1}
          className="h-10 w-fit rounded-none rounded-l-lg !bg-gray-400/70"
        >
          <span className="text-xl">-</span>
        </MyButton>

        <input
          type="number"
          id="Quantity"
          value={quantity}
          // disabled
          onChange={(e) => {
            setQuantity(Number(e.target.value));
            onChange && onChange(Number(e.target.value));
          }}
          className="transition-smooth h-10 w-16 border-transparent text-center outline-none [-moz-appearance:_textfield] focus:ring-1 focus:ring-blue-400 sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none "
        />

        <MyButton
          className="h-10 w-fit rounded-none rounded-r-lg !bg-gray-400/70"
          onClick={() => {
            setQuantity((prev) => ++prev);
            onChange && onChange(quantity + 1);
          }}
        >
          <span className="text-xl">+</span>
        </MyButton>
      </div>
    </div>
  );
}
