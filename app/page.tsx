"use client";
import { Button, MyLink } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col px-6 pb-20 ">
      <div className="relative flex flex-col-reverse">
        <div className="md:w-fit md:absolute w-full z-10 flex flex-col items-center justify-center md:items-start md:justify-normal md:bg-gray-900 md:bg-opacity-50 md:px-6 md:py-8 md:top-20 md:-left-20 lg:top-24 lg:left-24">
          <p className="text-primary text-4xl md:text-5xl mb-10 lg:text-7xl leading-tight text-center md:text-left">
            Custom <br /> HandMade <br /> Notebooks
          </p>
          <Button className="mb-8" />
          <MyLink link="#" title="watch video" />
        </div>
        <div className="relative aspect-square lg:aspect-video lg:h-[700px] md:h-[600px] w-full h-96">
          <Image
            src={"/notes.jpg"}
            alt="note"
            fill
            className="object-contain w-full rotate-90"
          />
        </div>
      </div>
    </div>
  );
}
