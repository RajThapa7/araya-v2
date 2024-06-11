import ArayaIcon from "@/public/icon";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-5rem)]">
      <div className="z-[999] flex items-center justify-center w-screen h-screen fixed top-0 left-0">
        <div className="absolute animate-spin rounded-full h-52 w-52 border-t-8 border-b-8 border-accent-dark"></div>
        <ArayaIcon width={150} height={150} />
      </div>
    </div>
  );
};

export default Loading;
