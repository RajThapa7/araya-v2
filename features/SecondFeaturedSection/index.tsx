import { merriweather } from "@/app/fonts";
import { Button, MotionDiv } from "@/components";
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
        <MotionDiv
          variants={card}
          initial="hidden"
          whileInView="inView"
          viewport={{ once: true }}
          className=" text-center
         lg:text-left flex flex-col-reverse lg:flex-row lg:items-center justify-between gap-8 md:gap-16 lg:gap-24"
        >
          <div className="flex-1">
            <h2
              className={`!font-semibold text-header header-2 ${merriweather.className}`}
            >
              Journey through Pages
            </h2>

            <p className="text-body body mt-5 mb-10">
              Want to learn more about books, arts, literature and creating in
              general, then you will feel right at home with our blog. Check out
              our blog now and be part of the artistic adventure
            </p>

            <Button isSecondary>Check our blog</Button>
          </div>

          <MotionDiv
            variants={image}
            className="relative w-full max-w-lg aspect-[4/3] mx-auto"
          >
            <Image
              alt="Student"
              src={"/blog_title.jpeg"}
              sizes="(min-width: 600px) 512px, calc(92.86vw - 27px)"
              className="object-cover rounded-sm"
              fill
            />
          </MotionDiv>
        </MotionDiv>
      </div>
    </section>
  );
}
