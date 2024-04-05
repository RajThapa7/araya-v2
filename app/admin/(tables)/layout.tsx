"use client";
import MyButton from "@/components/MyButton";
import Image from "next/image";
import { PropsWithChildren, useState } from "react";

const data = [
  {
    id: 0,
    name: "Products",
  },
  {
    id: 1,
    name: "Products",
  },
  {
    id: 2,
    name: "Products",
  },
];

const Layout = ({ children }: PropsWithChildren) => {
  const [activeIndex, setActiveIndex] = useState<number>();
  return (
    <div className="flex flex-row">
      <div className="bg-gray-100 h-screen w-64 py-8 flex flex-col fixed">
        <Image
          alt="logo"
          width={100}
          height={100}
          className="ml-6 mb-4"
          src={require("@/public/footer-logo.svg")}
        />
        <div className="flex flex-col mt-4 flex-1">
          {data.map(({ id, name }) => (
            <p
              key={id}
              onClick={() => setActiveIndex(id)}
              className={`py-4 cursor-pointer transition-smooth hover:bg-accent hover:bg-opacity-20 hover:text-accent-dark pl-6 ${
                activeIndex === id && "bg-accent bg-opacity-20 text-accent-dark"
              }`}
            >
              {name}
            </p>
          ))}
        </div>
        <MyButton className="!py-4 mx-4">Logout</MyButton>
      </div>
      <div className="flex-1 ml-64">{children}</div>
    </div>
  );
};

export default Layout;
