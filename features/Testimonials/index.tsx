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
    title: "Magnificent",
    name: "Samriddhi Laxmi Aryal",
    description:
      " The diary i got was very magnificent! The love we get from the handmade diary is insane. Not only the love, the build quality and the papers are also so nice. I love it so much. The binding techniques are also very unique including the colors too.",
    imageUrl:
      "https://instagram.fktm7-1.fna.fbcdn.net/v/t51.2885-19/403689730_857533736103285_5045379600265971032_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fktm7-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=VccIG_1qy3AAX_vZkgB&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCc6FfMgOLh6CM8wswXiItw-oh8nkYmYP3yIhgL3sBSsQ&oe=65D8928C&_nc_sid=8b3546",
  },
  {
    _id: 1,
    title: "Unique and Lovely",
    name: "Roj Thapa",
    description:
      "I wanted a cute small journal for myself and got exactly what I wanted . It was very unique and lovely. Also the paper was so good",
    imageUrl:
      "https://instagram.fktm10-1.fna.fbcdn.net/v/t51.2885-19/428340821_1087332819057410_199037800165218549_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fktm10-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=Y0pkXhdikcoAX9q46EM&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfAzrtFjxVj-dRKLunnyjEUVLWON-60iBr45s_SY2owkKQ&oe=65D8CB04&_nc_sid=8b3546",
  },
  {
    _id: 2,
    title: "Excellent Notes",
    name: "Jashmine Basnet",
    description:
      "I bought notebook from Araya Arts and i was very much impressed with the quality of the notebook and the detail they put into it. Definitely ordering another notebook from Araya Arts ",
    imageUrl:
      "https://instagram.fktm10-1.fna.fbcdn.net/v/t51.2885-19/426206507_691095196252890_2399989411644246671_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fktm10-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=RaMG6hmE3_oAX8yjCFN&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCJ1JxRWKH3p7kfFikKCuaxwJ7ayqhOXVgIQCzC5f3CUw&oe=65D841ED&_nc_sid=8b3546",
  },
  {
    _id: 3,
    title: "Exceeding Expectations",
    name: "Raj Maharjan",
    description:
      "I highly recommend this business. The quality of products is consistently outstanding, exceeding my expectation every time. I have amazing experience with diary. I was so pleased with the service I received from Araya Arts",
    imageUrl:
      "https://instagram.fktm7-1.fna.fbcdn.net/v/t51.2885-19/404922067_772313821603270_8500373553306103191_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fktm7-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=tqzJu5hHNKMAX90ZrNF&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfAd3vfIzCZRvLsvoFEj9SrjfIhU2oTrnmwmIVEVX6j0pQ&oe=65D94781&_nc_sid=8b3546",
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
            className={`font-semibold leading-[1.1] header-2 text-header max-w-xl ${merriweather.className}`}
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
    <div className="mr-2 md:mr-5">
      <blockquote className="rounded-md flex h-full flex-col justify-between bg-primary p-6 shadow-sm sm:p-8 lg:p-12">
        <div>
          <div className="inline-flex items-center gap-4">
            <Image
              alt="Man"
              src={
                imageUrl ||
                "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
              }
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
