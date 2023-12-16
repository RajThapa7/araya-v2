"use client";
import classNames from "@/utils/classNames";
import { motion } from "framer-motion";
import { PropsWithChildren, useState } from "react";

interface IButtonProps extends PropsWithChildren {
  className?: string;
  isSecondary?: boolean;
}

export default function Button({
  className,
  isSecondary = false,
  children,
}: IButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      className={classNames(
        className,
        `relative group outline outline-1 ${
          isSecondary
            ? "outline-gray-700 hover:outline-accent"
            : "outline-primary"
        } text-primary rounded-md px-24 uppercase h-[68px] transition-smooth`
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p
        className={`${
          isSecondary
            ? "group-hover:text-primary text-black"
            : "group-hover:text-black"
        } z-10 absolute left-0 top-[23px] w-full transition-smooth font-semibold`}
      >
        {children}
      </p>
      <motion.div
        animate={isHovered ? { height: 70 } : { height: 0 }}
        className={`${isSecondary ? "bg-accent" : "bg-primary"} left-0 ${
          isHovered ? "bottom-0" : "top-0"
        } absolute w-full rounded-md z-0`}
      />
    </button>
  );
}
