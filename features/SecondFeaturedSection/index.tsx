"use client";
import { merriweather } from "@/app/fonts";
import { Button } from "@/components";
import { motion } from "framer-motion";
import Image from "next/image";

const card = {
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
    y: 200,
  },
};

const image = {
  inView: {
    // x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.5, 1, 0.89, 1],
    },
  },
  hidden: {
    // x: "-200%",
    opacity: 0,
  },
};

export default function SecondFeaturedSection() {
  return (
    <section className="px-6 py-24 bg-primary-dark md:py-32 lg:py-44">
      <div className="mx-auto max-w-screen-xl">
        <motion.div
          variants={card}
          initial="hidden"
          whileInView="inView"
          viewport={{ once: true }}
          className=" text-center
         md:text-left flex flex-col-reverse md:flex-row md:items-center justify-between gap-8 md:gap-24"
        >
          <div className="flex-1">
            <h2
              className={`text-3xl !font-semibold text-header sm:text-4xl md:text-5xl ${merriweather.className}`}
            >
              Journey through Pages
            </h2>

            <p className="text-body text-md md:text-lg mt-5 mb-10">
              Want to learn more about books, arts, literature and creating in
              general, then you will feel right at home with our blog. Check out
              our blog now and be part of the artistic adventure
            </p>

            <Button isSecondary>Check our blog</Button>
          </div>

          <motion.div
            variants={image}
            className="relative w-full max-w-lg aspect-[4/3] mx-auto"
          >
            <Image
              alt="Student"
              src="https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              className="object-cover"
              fill
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
