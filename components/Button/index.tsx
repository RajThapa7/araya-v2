"use client";
import classNames from "@/utils/classNames";
import { motion } from "framer-motion";
import { useState } from "react";

interface IButtonProps {
  className?: string;
}

export default function Button({ className }: IButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      className={classNames(
        className,
        `relative group outline outline-2 outline-primary text-primary rounded-md px-24 uppercase h-[68px]`
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p className="group-hover:text-black z-10 absolute left-0 top-[23px] w-full transition-smooth font-semibold">
        Book Now
      </p>
      <motion.div
        animate={isHovered ? { height: 70 } : { height: 0 }}
        className={`bg-primary left-0 ${
          isHovered ? "bottom-0" : "top-0"
        } absolute w-full rounded-md z-0`}
      />
    </button>
  );
}
