"use client";
import { useState } from "react";
import { headerData, paymentMethodData } from "./data";

export default function PaymentMethodSelector() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      <div className="flex flex-1 flex-col">
        <p className="mb-6 text-xl font-semibold text-gray-800">
          Select Payment Method
        </p>
        <div className="min-h-[460px]">
          <div className="flex flex-row gap-1">
            {headerData.map(({ icon, id, title }) => (
              <div
                key={id}
                onClick={() => setActiveIndex(id)}
                className={`${
                  activeIndex === id ? "bg-white" : "bg-gray-100"
                } flex h-fit min-w-[120px] cursor-pointer flex-col items-center gap-4 px-4 pb-4 pt-4`}
              >
                {icon}
                <p className="text-xs font-medium text-gray-900">{title}</p>
              </div>
            ))}
          </div>
          {paymentMethodData.map(({ component, id }) => (
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
