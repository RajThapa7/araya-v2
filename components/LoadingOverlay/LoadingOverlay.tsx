import Image from "next/image";

const LoadingOverlay = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <>
      {isVisible && (
        <div className="z-[999] flex items-center justify-center w-screen h-screen fixed top-0 left-0 bg-gray-700 bg-opacity-30">
          <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-accent-dark"></div>
          <Image
            alt="loader"
            src={require("@/app/icon.svg")}
            width={80}
            height={80}
          />
        </div>
      )}
    </>
  );
};

export default LoadingOverlay;
