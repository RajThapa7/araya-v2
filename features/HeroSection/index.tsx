"use client";
import { merriweather } from "@/app/fonts";
import { Button, MyLink } from "@/components";
import { motion } from "framer-motion";
import Image from "next/image";

const image = {
  inView: {
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.05,
      duration: 0.5,
      ease: [0.5, 1, 0.89, 1],
    },
  },
  hidden: {
    y: -300,
  },
};

const card = {
  inView: {
    x: 0,
    transition: {
      duration: 0.3,
      ease: [0.5, 1, 0.89, 1],
    },
  },
  hidden: {
    x: -500,
  },
};

export default function HeroSection() {
  return (
    <div className="green-background flex items-center justify-center flex-col pb-20 md:pb-40 pt-28 md:pt-32 lg:pt-40 px-6">
      <motion.div
        variants={image}
        initial="hidden"
        whileInView="inView"
        viewport={{ once: true }}
        className="relative flex flex-col-reverse max-w-screen-xl mx-auto w-full gap-y-12"
      >
        <motion.div
          variants={card}
          className="md:w-fit md:absolute w-full z-10 flex flex-col items-center justify-center md:items-start md:justify-normal md:bg-gray-900 md:bg-opacity-50 md:px-6 md:py-8 md:top-14 md:-left-0 lg:top-20 lg:left-0"
        >
          <p
            className={`text-primary text-4xl md:text-5xl mb-10 lg:text-6xl leading-tight text-center md:text-left ${merriweather.className}`}
          >
            Custom <br /> HandMade <br /> Notebooks
          </p>
          <Button className="mb-8">book now </Button>
          <MyLink link="#" title="watch video" />
        </motion.div>
        <div className="relative w-full max-w-md sm:max-w-none md:w-[600px] lg:w-[800px] xl:w-[1000px] sm:aspect-video aspect-square mx-auto">
          <Image src={"/notes.png"} alt="note" fill className="object-cover" />
        </div>
      </motion.div>
    </div>
  );
}
