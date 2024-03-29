import { merriweather } from "@/app/fonts";
import { Button, MyLink } from "@/components";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="green-background flex items-center justify-center flex-col pb-20 md:pb-40 pt-28 md:pt-32 lg:pt-40 px-6">
      <div className="relative flex flex-col-reverse max-w-screen-xl mx-auto w-full gap-y-12">
        <div className="md:w-fit md:absolute w-full z-10 flex flex-col items-center justify-center md:items-start md:justify-normal md:bg-gray-900 md:bg-opacity-50 md:px-6 md:py-8 md:top-14 md:-left-0 lg:top-20 lg:left-0">
          <p
            className={`text-primary mb-10 header-1 leading-[1.1] text-center md:text-left ${merriweather.className}`}
          >
            Custom <br /> HandMade <br /> Notebooks
          </p>
          <Button className="mb-8">book now </Button>
          <MyLink link="#" title="watch video" />
        </div>
        <div className="relative w-full max-w-md sm:max-w-none md:w-[600px] lg:w-[800px] xl:w-[1000px] sm:aspect-video aspect-square mx-auto">
          <Image
            src={"/notes.webp"}
            alt="note"
            sizes="(min-width: 1280px) 1000px, (min-width: 1040px) 800px, (min-width: 780px) 600px, (min-width: 640px) calc(100vw - 48px), (min-width: 540px) 448px, calc(89.09vw - 15px)"
            priority
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
