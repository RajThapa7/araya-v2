"use client";
import empty from "@/public/empty.svg";
import classNames from "@/utils/classNames";
import { useRouter } from "next-nprogress-bar";
import Image from "next/image";
import MyButton from "../MyButton";

const Empty = ({ title, className }: { title: string; className?: string }) => {
  const router = useRouter();
  return (
    <div
      className={classNames(
        className,
        `flex flex-col items-center justify-start gap-10`,
      )}
    >
      <div className="relative aspect-video w-72 md:w-96">
        <Image
          src={empty}
          alt="empty"
          fill
          className="h-full w-full object-contain"
        />
      </div>
      <div className="flex flex-col items-center gap-6">
        <p className="text-xl font-semibold text-header md:text-2xl">{title}</p>
        <MyButton
          className="!w-fit !py-4"
          onClick={() => router.push("/store")}
        >
          Continue shopping
        </MyButton>
      </div>
    </div>
  );
};

export default Empty;
