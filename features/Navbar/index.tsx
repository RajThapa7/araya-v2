"use client";
import { merriweather } from "@/app/fonts";
import { HamburgMenu } from "@/components";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { FaStore } from "react-icons/fa";
import { socialMediaData } from "../Footer";

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
  {
    id: 3,
    title: "FAQ",
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
      // ease: "linear",
    },
  },
};

const item = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: 100 },
};

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollBarCompensation = useMemo(
    () => window.innerWidth - document.body.offsetWidth,
    []
  );

  const html = document.querySelector("html");

  useEffect(() => {
    if (!html) {
      return;
    }
    if (isMobileMenuOpen) {
      setTimeout(() => {
        html.style.overflowY = "hidden";
      }, 500);
      // html.classList.add("example");
    }
    return () => {
      html.style.overflowY = "scroll";
      // html.classList.remove("example");
    };
  }, [html, isMobileMenuOpen, scrollBarCompensation]);

  return (
    <nav className="flex flex-row justify-between pt-10 pb-4 px-6 bg-transparent absolute top-0 left-0 w-full">
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
              <motion.div
                layout
                className="flex flex-col mobile-menu-background items-center justify-start w-full h-screen pt-32 lg:items-end"
              >
                <div className="flex flex-col gap-6">
                  {navLinks.map(({ id, title, link, icon }) => (
                    <motion.div
                      key={id}
                      className={`${merriweather.className} lg:pr-20 text-[22px] lg:text-2xl text-primary font-bold`}
                      variants={item}
                    >
                      <Link
                        href={link}
                        className="transition-smooth hover:text-[#ff8389]"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {title}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                layout
                className="h-screen hidden lg:flex lg:w-[45%] bg-accent-dark"
              >
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
                          className="transition-smooth hover:text-[#ff8389]"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {title}
                        </Link>
                      </motion.div>
                    ))}
                    <motion.div
                      variants={item}
                      className="flex flex-row gap-6 items-center lg:pl-20 text-primary"
                    >
                      {socialMediaData.map(({ icon, link, id }) => (
                        <a
                          key={id}
                          href={link}
                          target="_blank"
                          className="transition-smooth hover:opacity-70"
                        >
                          {icon}
                        </a>
                      ))}
                    </motion.div>{" "}
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
