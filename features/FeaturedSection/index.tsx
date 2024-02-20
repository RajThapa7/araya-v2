"use client";
import { merriweather } from "@/app/fonts";
import { Button } from "@/components";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaTree } from "react-icons/fa";

const data = [
  {
    id: 0,
    title: "Simple Watch",
    price: "500",
  },
  {
    id: 1,
    title: "Simple Watch",
    price: "500",
  },
];

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
    y: 300,
  },
};

const title = {
  inView: {
    x: 0,
    transition: {
      duration: 0.3,
      ease: [0.5, 1, 0.89, 1],
    },
  },
  hidden: {
    x: -600,
  },
};

const quotes = {
  inView: {
    opacity: 1,
    transition: {
      ease: [0.5, 1, 0.89, 1],
    },
  },
  hidden: {
    opacity: 0,
  },
};

export default function FeaturedSection() {
  return (
    <div className="px-6 bg-primary-dark py-20 lg:py-32">
      <motion.div
        variants={card}
        initial="hidden"
        whileInView="inView"
        viewport={{ once: true }}
        className="mx-auto max-w-screen-xl"
      >
        <motion.div
          viewport={{ once: true }}
          variants={quotes}
          className="flex flex-col items-center gap-8 pb-24 lg:pb-40"
        >
          <FaTree className="text-body text-4xl md:text-5xl" />
          <p
            className={`text-body !leading-snug text-center header-3 max-w-5xl ${merriweather.className}`}
          >
            I am captivated by the smell of books, the symphony of colors, the
            ink on the paper and the stories they tell
          </p>
        </motion.div>
        <section>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
            <motion.div
              variants={title}
              className="grid place-content-center rounded pb-6"
            >
              <div className="mx-auto max-w-md text-center lg:text-left">
                <header>
                  <h2
                    className={`!font-semibold text-header header-2 ${merriweather.className}`}
                  >
                    Explore Our Shop
                  </h2>

                  <p className="text-body body mt-5 ">
                    Explore your artistic side with our special handmade
                    notebooks and art supplies. Made with care and love, just
                    for you. Start your creative journey today
                  </p>
                </header>

                <Button isSecondary className="mt-8">
                  Explore us
                </Button>
              </div>
            </motion.div>

            <div className="lg:col-span-2 lg:py-8">
              <ul className="grid grid-cols-2 gap-4">
                {data.map(({ id, price, title }) => (
                  <li key={id}>
                    <a href="#" className="group block">
                      <div className="relative w-full h-44 sm:h-72 md:h-80 xl:h-96">
                        <Image
                          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80"
                          alt=""
                          className="aspect-square w-full rounded object-cover"
                          fill
                        />
                      </div>

                      <div className="mt-3">
                        <h3 className="font-semibold text-header  group-hover:underline group-hover:underline-offset-4">
                          {title}
                        </h3>

                        <p className="mt-1 text-sm text-body">Rs. {price}</p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
