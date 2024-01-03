"use client";
import { merriweather } from "@/app/fonts";
import { Button } from "@/components";
import Image from "next/image";

export default function SecondFeaturedSection() {
  return (
    <section className="px-6 py-24 bg-primary-dark md:py-32 lg:py-44">
      <div className="mx-auto max-w-screen-xl">
        <div
          className=" text-center
         md:text-left flex flex-col-reverse md:flex-row justify-between gap-8 md:gap-24"
        >
          <div className="flex-1">
            <h2
              className={`text-2xl !font-semibold text-header sm:text-3xl lg:text-4xl ${merriweather.className}`}
            >
              Lorem, ipsum
            </h2>

            <p className="text-body mt-5 mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              egestas tempus tellus etiam sed. Quam a scelerisque amet
              ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
              quisque ut interdum tincidunt duis.
            </p>

            <Button isSecondary>Order Now</Button>
          </div>

          <div className="relative flex flex-1 w-full aspect-video mx-auto">
            <Image
              alt="Student"
              src="https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              className="object-fill"
              fill
              //   width={200}
              //   height={200}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
