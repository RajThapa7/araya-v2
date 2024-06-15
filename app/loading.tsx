import ArayaIcon from "@/public/icon";

const Loading = () => {
  return (
    <div className="flex h-[calc(100vh-5rem)] items-center justify-center">
      <div className="fixed left-0 top-0 z-[999] flex h-screen w-screen items-center justify-center">
        <div className="absolute h-44 w-44 animate-spin rounded-full border-b-8 border-t-8 border-accent-dark"></div>
        <ArayaIcon width={120} height={120} />
      </div>
    </div>
  );
};

export default Loading;
