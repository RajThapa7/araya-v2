"use client";
import { HamburgMenu } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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
  return (
    <nav className="flex flex-row justify-between pt-10 pb-4 px-6">
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
    </nav>
  );
}
