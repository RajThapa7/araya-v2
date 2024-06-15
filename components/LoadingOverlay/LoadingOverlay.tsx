import ArayaIcon from "@/public/icon";

const LoadingOverlay = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <>
      {isVisible && (
        <div className="fixed left-0 top-0 z-[999] flex h-screen w-screen items-center justify-center bg-gray-700 bg-opacity-30">
          <div className="absolute h-44 w-44 animate-spin rounded-full border-b-8 border-t-8 border-accent-dark"></div>
          <ArayaIcon width={120} height={120} />
        </div>
      )}
    </>
  );
};

export default LoadingOverlay;
