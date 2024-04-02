import MyButton from "@/components/MyButton";
import notFound from "@/public/404.svg";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 | Araya Arts Store",
  description: "Araya Arts | Handmade Custom Notebooks and other art materials",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 h-screen relative">
      <Image alt="404" src={notFound} />
      <p className="text-4xl mt-4 text-center">
        Oops! Looks like you&apos;re lost
      </p>
      <Link href={"/store"}>
        <MyButton className="!py-4 !px-4">Get back home</MyButton>
      </Link>
    </div>
  );
}
