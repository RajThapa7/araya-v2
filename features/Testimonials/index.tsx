"use client";
import { merriweather } from "@/app/fonts";
import { motion } from "framer-motion";
import Image from "next/image";
import { RefObject, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const data = [
  {
    _id: 0,
    title: "Excellent Notes",
    name: "Roj Thapa",
    description:
      "I bought notebook from Araya Arts and i was very much impressed with the quality of the notebook and the detail they put into it. Definitely ordering another notebook from Araya Arts ",
    imageUrl: "",
  },
  {
    _id: 1,
    title: "Excellent Notes",
    name: "Roj Thapa",
    description:
      "I bought notebook from Araya Arts and i was very much impressed with the quality of the notebook and the detail they put into it. Definitely ordering another notebook from Araya Arts ",
    imageUrl: "",
  },
  {
    _id: 2,
    title: "Excellent Notes",
    name: "Roj Thapa",
    description:
      "I bought notebook from Araya Arts and i was very much impressed with the quality of the notebook and the detail they put into it. Definitely ordering another notebook from Araya Arts ",
    imageUrl: "",
  },
  {
    _id: 3,
    title: "Excellent Notes",
    name: "Roj Thapa",
    description:
      "I bought notebook from Araya Arts and i was very much impressed with the quality of the notebook and the detail they put into it. Definitely ordering another notebook from Araya Arts ",
    imageUrl: "",
  },
];

const slider = {
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

const title = {
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

export default function Testimonials() {
  const sliderRef = useRef<any>(null);
  const settings: any = {
    dots: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplayspeed: 7000,
    nextArrow: "",
    prevArrow: "",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      ,
    ],
    slidesToShow: 3,
    pauseonhover: true,
  };

  return (
    <div className="pb-12 px-6 bg-primary-dark py-20 lg:py-32">
      <motion.div
        variants={slider}
        initial="hidden"
        whileInView={"inView"}
        viewport={{ once: true }}
        className="mx-auto max-w-screen-xl"
      >
        <motion.div
          variants={title}
          className="flex flex-col gap-4 sm:flex-row sm:justify-between mb-8 md:mb-12"
        >
          <p
            className={`font-semibold text-3xl sm:text-4xl md:text-5xl leading-tight text-header max-w-xl ${merriweather.className}`}
          >
            Read trusted reviews from our customers
          </p>
          <div className="inline-flex gap-6 w-fit sm:self-end">
            <LeftArrow {...{ sliderRef }} />
            <RightArrow {...{ sliderRef }} />
          </div>
        </motion.div>
        <Slider {...settings} ref={sliderRef}>
          {data?.map(({ _id, title, description, name, imageUrl }) => (
            <>
              <CarouselCard
                key={_id}
                {...{ title, name, description, imageUrl }}
              />
            </>
          ))}
        </Slider>
      </motion.div>
    </div>
  );
}

function RightArrow({ sliderRef }: { sliderRef: RefObject<any> }) {
  return (
    <button
      className="z-10 transition-colors "
      onClick={() => sliderRef.current.slickNext()}
    >
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 45 14"
        width={40}
        height={30}
        fill="rgb(69, 93, 88)"
      >
        <path d="M36.9,7.5H0v-1h36.9L35,0c2.6,2.8,6.7,5.4,10,7c-3.3,1.6-7.4,4.2-10,7L36.9,7.5z"></path>
        <path d="M36.9,7.5H0v-1h36.9L35,0c2.6,2.8,6.7,5.4,10,7c-3.3,1.6-7.4,4.2-10,7L36.9,7.5z"></path>
      </svg>
    </button>
  );
}

function LeftArrow({ sliderRef }: { sliderRef: RefObject<any> }) {
  return (
    <button
      className="rotate-180 z-10 transition-colors"
      onClick={() => {
        sliderRef.current.slickPrev();
      }}
    >
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 45 14"
        width={40}
        height={30}
        fill={"rgb(69, 93, 88)"}
      >
        <path d="M36.9,7.5H0v-1h36.9L35,0c2.6,2.8,6.7,5.4,10,7c-3.3,1.6-7.4,4.2-10,7L36.9,7.5z"></path>
        <path d="M36.9,7.5H0v-1h36.9L35,0c2.6,2.8,6.7,5.4,10,7c-3.3,1.6-7.4,4.2-10,7L36.9,7.5z"></path>
      </svg>
    </button>
  );
}

function CarouselCard({
  title,
  name,
  description,
  imageUrl,
}: {
  title: string;
  name: string;
  description: string;
  imageUrl: string;
}) {
  return (
    <div className="md:mr-5">
      <blockquote className="rounded-md flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
        <div>
          <div className="inline-flex items-center gap-4">
            <Image
              alt="Man"
              src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
              className="rounded-full object-cover"
              width={56}
              height={56}
            />
            <div className="flex flex-col">
              <div className="flex gap-0.5 text-yellow-400">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>

                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>

                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>

                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>

                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <p className="text-header font-semibold text-lg">{name}</p>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-2xl font-bold text-accent sm:text-3xl">
              {title}
            </p>

            <p className="mt-4 leading-relaxed text-body">{description}</p>
          </div>
        </div>
      </blockquote>
    </div>
  );
}
