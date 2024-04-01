import logo from "@/app/icon.svg";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-5rem)]">
      <Image
        src={logo}
        width={150}
        height={100}
        alt="logo"
        className="animate-grow-rotate"
      />
    </div>
  );
};

export default Loading;
