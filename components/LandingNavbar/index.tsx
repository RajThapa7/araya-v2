"use client";
import { merriweather } from "@/app/fonts";
import { HamburgMenu, MotionDiv } from "@/components";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { socialMediaData } from "../LandingFooter/data";
import { navItems, navLinks } from "./data";

const list = {
  visible: {
    width: "100vw",
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.05,
      duration: 0.5,
      ease: [0.5, 1, 0.89, 1],
    },
  },
  hidden: {
    width: 0,
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

export default function LandingNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const html =
    typeof document !== "undefined" && document.querySelector("html");

  useEffect(() => {
    if (!html) {
      return;
    }
    if (isMobileMenuOpen) {
      setTimeout(() => {
        html.style.overflowY = "hidden";
      }, 500);
    }
    return () => {
      html.style.overflowY = "scroll";
    };
  }, [html, isMobileMenuOpen]);

  return (
    <nav className="flex flex-row justify-between items-center pt-6 pb-4 px-6 bg-transparent absolute top-0 left-0 w-full">
      <Link
        href={"/"}
        className="relative z-50 w-24 aspect-video lg:w-28 cursor-pointer"
      >
        <Image src={"/logo.svg"} alt="logo" fill className="object-contain" />
      </Link>
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
          <MotionDiv
            layout
            transition={{ duration: 1 }}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={list}
            className=" fixed top-0 h-screen left-0 z-40"
          >
            <div className="flex">
              <MotionDiv
                layout
                className="flex flex-col mobile-menu-background items-center justify-start w-full h-screen pt-32 lg:items-end"
              >
                <div className="flex flex-col gap-6">
                  {navLinks.map(({ id, title, link }) => (
                    <MotionDiv
                      key={id}
                      className={`${merriweather.className} lg:even:hidden lg:pr-20 text-[22px] lg:text-2xl text-primary font-bold`}
                      variants={item}
                    >
                      <Link
                        href={link}
                        className="transition-smooth hover:text-[#ff8389]"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {title}
                      </Link>
                    </MotionDiv>
                  ))}
                  <MotionDiv
                    variants={item}
                    className="flex flex-row gap-6 items-center lg:hidden text-primary"
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
                  </MotionDiv>{" "}
                </div>
              </MotionDiv>
              <MotionDiv
                layout
                className="h-screen hidden lg:flex lg:w-[45%] bg-[#265e46]"
              >
                <div className="flex flex-col items-center justify-start w-full h-screen pt-32 lg:items-start">
                  <div className="flex flex-col gap-6">
                    {navLinks.map(({ id, title, link }) => (
                      <MotionDiv
                        key={id}
                        className={`${merriweather.className} text-[22px] lg:pl-20 lg:text-2xl text-primary font-bold odd:hidden`}
                        variants={item}
                      >
                        <Link
                          href={link}
                          className="transition-smooth hover:text-[#ff8389]"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {title}
                        </Link>
                      </MotionDiv>
                    ))}
                    <MotionDiv
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
                    </MotionDiv>{" "}
                  </div>
                </div>
              </MotionDiv>
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </nav>
  );
}
