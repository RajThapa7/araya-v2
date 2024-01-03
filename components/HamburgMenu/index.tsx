"use client";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

interface IHambugMenuProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export default function HamburgMenu({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: IHambugMenuProps) {
  return (
    <div
      className="flex flex-col gap-y-[5px] z-50 group md:ml-4"
      onClick={() => setIsMobileMenuOpen((prev) => !prev)}
    >
      <motion.div
        animate={{
          rotate: isMobileMenuOpen ? 45 : 0,
          y: isMobileMenuOpen ? 14 : 0,
        }}
        className="h-[3px] bg-gray-300 w-10 rounded-full group-hover:bg-pink-400 transition-colors"
      ></motion.div>
      <motion.div
        animate={{ width: isMobileMenuOpen ? 0 : 40 }}
        className="group-hover:bg-pink-400 h-[3px] bg-gray-300 rounded-full w-10 transition-colors"
      ></motion.div>
      <motion.div
        animate={{
          rotate: isMobileMenuOpen ? 135 : 0,
          y: isMobileMenuOpen ? -3 : 0,
        }}
        className="h-[3px] bg-gray-300 group-hover:bg-pink-400 w-10 rounded-full transition-colors"
      ></motion.div>
    </div>
  );
}
