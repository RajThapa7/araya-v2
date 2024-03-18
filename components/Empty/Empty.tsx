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
        `flex flex-col items-center justify-start gap-10`
      )}
    >
      <Image src={empty} alt="empty" width={400} height={400} />
      <div className="flex flex-col gap-4 items-center">
        <p className="text-body font-semibold text-3xl text-center">{title}</p>
        <MyButton
          className="!py-4 !w-fit"
          onClick={() => router.push("/store")}
        >
          Continue shopping
        </MyButton>
      </div>
    </div>
  );
};

export default Empty;
