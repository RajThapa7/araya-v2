"use client";
import { HamburgMenu } from "@/components";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { FaStore } from "react-icons/fa";

const navLinks = [
  {
    id: 0,
    title: "Home",
    link: "/",
  },
  {
    id: 1,
    title: "Category",
    link: "/",
  },
  {
    id: 2,
    title: "About Me",
    link: "/",
  },
];

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

// const list = {
//   visible: {
//     width: "100vw",
//     x: 0,
//     opacity: 1,
//     transition: {
//       when: "beforeChildren",
//       staggerChildren: 0.05,
//       duration: 0.4,
//     },
//   },
//   hidden: {
//     // width: "100px",
//     x: -10000,
//     opacity: 0,
//     transition: {
//       when: "afterChildren",
//       staggerChildren: 0.05,
//       duration: 0.6,
//     },
//   },
// };

// const item = {
//   visible: { opacity: 1, x: 0 },
//   hidden: { opacity: 0, x: -100 },
// };

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
            className="z-50 inline-flex items-center gap-2 text-primary justify-center transition-smooth hover:text-red-300"
          >
            {icon}
            <p className="hidden md:flex uppercase font-semibold">{title}</p>
          </Link>
        ))}
        <HamburgMenu {...{ isMobileMenuOpen, setIsMobileMenuOpen }} />
      </div>
      <AnimatePresence>
        <motion.div
          transition={{ duration: 1 }}
          animate={isMobileMenuOpen ? { width: "100vw" } : { width: 0 }}
          // initial="hidden"
          // animate="visible"
          // exit="hidden"
          // variants={list}
          className=" bg-accent-dark fixed top-0 h-screen left-0 bg-opacity-90 z-40"
        >
          <div className="flex flex-col gap-y-6 text-center">
            {navLinks.map(({ id, title, link, icon }) => (
              <motion.div key={id} className="text-lg">
                <Link href={link} onClick={() => setIsMobileMenuOpen(false)}>
                  {title}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </nav>
  );
}
