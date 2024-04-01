import MyButton from "@/components/MyButton";
import notFound from "@/public/404.svg";
import Image from "next/image";
import Link from "next/link";

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
