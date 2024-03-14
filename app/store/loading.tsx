import logo from "@/app/icon.svg";
import { MotionDiv } from "@/components";
import Image from "next/image";

const Loading = () => {
  return (
    <MotionDiv
      className="flex justify-center items-center h-[calc(100vh-5rem)]"
      animate={{ rotate: [0, -360, -360, 0], scale: [1, 1.5, 1.5, 1, 1] }}
      transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
    >
      <Image src={logo} width={150} height={100} alt="logo" />
    </MotionDiv>
  );
};

export default Loading;
