"use client";
import { HamburgMenu } from "@/components";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { FaStore } from "react-icons/fa";

const navItems = [
  {
    id: 0,
    title: "Store",
    icon: <FaStore className="text-xl lg:text-base" />,
    link: "#",
  },
  {
    id: 1,
    title: "Store",
    icon: <FaStore className="text-xl lg:text-base" />,
    link: "#",
  },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollBarCompensation = useMemo(
    () => window.innerWidth - document.body.offsetWidth,
    []
  );
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflowY = "hidden";
      // document.body.style.backgroundColor = "rgb(54 128 57)";
      document.body.style.paddingRight = `${scrollBarCompensation}px`;
    }
    return () => {
      document.body.style.overflowY = "scroll";
      // document.body.style.backgroundColor = "";
      document.body.style.paddingRight = "";
    };
  }, [isMobileMenuOpen, scrollBarCompensation]);

  return (
    <nav
      className="flex flex-row justify-between pt-10 pb-4 px-6 bg-transparent absolute top-0 left-0 w-full"
      style={{
        paddingRight: isMobileMenuOpen
          ? `${scrollBarCompensation + 24}px`
          : " 24px",
      }}
    >
      <Image src={"/next.svg"} width={100} height={100} alt="logo" />
      <div className="gap-8 flex flex-row items-center justify-center">
        {navItems.map(({ icon, id, link, title }) => (
          <Link
            key={id}
            href={link}
            className="inline-flex items-center gap-2 text-primary justify-center transition-smooth hover:text-red-300"
          >
            {icon}
            <p className="hidden md:flex uppercase font-semibold">{title}</p>
          </Link>
        ))}
        <HamburgMenu {...{ isMobileMenuOpen, setIsMobileMenuOpen }} />
      </div>
      <motion.div
        animate={isMobileMenuOpen ? { width: "100vw" } : { width: 0 }}
        className=" bg-accent-dark fixed top-0 h-screen left-0 bg-opacity-90 z-40"
      ></motion.div>
    </nav>
  );
}
