"use client";
import { MyCarousel } from "@/components/Carousel/Carousel";
import FeaturedSection from "@/features/StoreFeaturedSection";
import { PropsWithChildren } from "react";
import "../../globals.css";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <MyCarousel />
      <div className="mx-auto max-w-7xl px-8 2xl:px-0">{children}</div>
      <FeaturedSection />
    </>
  );
}
