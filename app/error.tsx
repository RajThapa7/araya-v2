"use client";
import MyButton from "@/components/MyButton";
import errorImage from "@/public/error.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error, "error error");
  }, [error]);

  return (
    <div className="flex flex-col gap-8 justify-center items-center h-[calc(100vh-5rem)]">
      <Image src={errorImage} width={500} height={200} alt="error-image" />
      <h2 className="text-3xl">Something went wrong</h2>
      <p className="text-lg">{error.message}</p>
      <div className="inline-flex gap-4">
        <MyButton onClick={() => reset()} isSecondary className="!py-3">
          Try again
        </MyButton>
        <MyButton onClick={() => router.push("/store")} className="!py-3">
          Back Home
        </MyButton>
      </div>
    </div>
  );
}
