"use client";
import { Button, MyLink } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="relative">
        <div className="w-32 absolute top-24 left-32 z-10 flex flex-col gap-14">
          <p className="text-primary text-7xl leading-tight">
            Custom HandMade Notebooks
          </p>
          <Button />
          <MyLink link="#" title="watch video" />
        </div>
        <div className="relative aspect-video w-[1200px]">
          <Image
            src={"/notes.jpg"}
            alt="note"
            fill
            className="object-contain rotate-90"
          />
        </div>
      </div>
    </div>
  );
}
