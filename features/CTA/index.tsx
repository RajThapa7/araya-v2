"use client";
import { merriweather } from "@/app/fonts";
import { Button } from "@/components";
import { motion } from "framer-motion";

const description = {
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

const header = {
  inView: {
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.5, 1, 0.89, 1],
    },
  },
  hidden: {
    x: -800,
  },
};

function CTA() {
  return (
    <div className="px-6 py-24 green-background md:py-32 lg:py-44">
      <motion.div
        variants={description}
        initial="hidden"
        whileInView={"inView"}
        viewport={{ once: true }}
        className="flex flex-col mx-auto max-w-screen-xl gap-4 md:flex-row md:justify-between md:items-start lg:gap-24"
      >
        <motion.p
          variants={header}
          className={`text-primary text-2xl sm:text-3xl md:text-4xl font-medium !leading-tight flex-1 lg:text-5xl ${merriweather.className}`}
        >
          Relax and revive with one of La vitoria's rejuvenating spa treatments.
        </motion.p>
        <div className="text-primary flex flex-col gap-8 flex-1">
          <p className="text-md !leading-relaxed sm:text-lg md:text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
            distinctio est, explicabo vel facilis a sit iste, dolorum illum quam
            adipisci natus soluta ut pariatur. Consectetur voluptas tempore cum
            sint.
          </p>
          <Button className="w-fit">Learn More</Button>
        </div>
      </motion.div>
    </div>
  );
}

export default CTA;
