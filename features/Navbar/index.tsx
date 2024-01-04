"use client";
import { merriweather } from "@/app/fonts";
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

const list = {
  visible: {
    width: "100vw",
    // x: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.05,
      duration: 0.5,
      ease: [0.5, 1, 0.89, 1],
    },
  },
  hidden: {
    width: 0,
    // x: "-100vw",
    transition: {
      when: "afterChildren",
      staggerChildren: 0.05,
      duration: 0.7,
      ease: [0.65, 0, 0.35, 1],
    },
  },
};

const item = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: 100 },
};

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(true);

  const scrollBarCompensation = useMemo(
    () => window.innerWidth - document.body.offsetWidth,
    []
  );
  useEffect(() => {
    if (isMobileMenuOpen) {
      // document.body.style.overflowY = "hidden";
      // document.body.style.backgroundColor = "rgb(54 128 57)";
      // document.body.style.paddingRight = `${scrollBarCompensation}px`;
    }
    return () => {
      // document.body.style.overflowY = "scroll";
      // document.body.style.backgroundColor = "";
      // document.body.style.paddingRight = "";
    };
  }, [isMobileMenuOpen, scrollBarCompensation]);

  return (
    <nav
      className="flex flex-row justify-between pt-10 pb-4 px-6 bg-transparent absolute top-0 left-0 w-full"
      style={{
        paddingRight: isMobileMenuOpen
          ? // ? `${scrollBarCompensation + 24}px`
            `24px`
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
        {isMobileMenuOpen && (
          <motion.div
            layout
            transition={{ duration: 1 }}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={list}
            className=" fixed top-0 h-screen left-0 z-40"
          >
            <div className="flex">
              <motion.div className="flex flex-col mobile-menu-background items-center justify-start w-full h-screen pt-32 lg:items-end">
                <div className="flex flex-col gap-6">
                  {navLinks.map(({ id, title, link, icon }) => (
                    <motion.div
                      key={id}
                      className={`${merriweather.className} lg:pr-20 text-[22px] lg:text-2xl text-primary font-bold`}
                      variants={item}
                    >
                      <Link
                        href={link}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {title}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div className="h-screen hidden lg:flex lg:w-[45%] bg-accent-dark">
                <div className="flex flex-col items-center justify-start w-full h-screen pt-32 lg:items-start">
                  <div className="flex flex-col gap-6">
                    {navLinks.map(({ id, title, link, icon }) => (
                      <motion.div
                        key={id}
                        className={`${merriweather.className} text-[22px] lg:pl-20 lg:text-2xl text-primary font-bold`}
                        variants={item}
                      >
                        <Link
                          href={link}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {title}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
