const CardSkeletal = ({ count = 4 }: { count?: number }) => {
  return (
    <div className="flex items-center justify-center flex-wrap gap-10">
      {Array.from({ length: count }, (v, i) => i).map((index) => (
        <div key={index}>
          <div
            className="rounded-md bg-gray-300 animate-shimmer h-64 w-64"
            key={index}
          ></div>
          <div className="flex w-full flex-col space-y-2">
            <div className="animate-shimmer dark:dark-animate-shimmer h-2 rounded-full bg-gray-200 "></div>
            <div className="animate-shimmer dark:dark-animate-shimmer h-2 w-full rounded-full bg-gray-300"></div>
            <div className="animate-shimmer dark:dark-animate-shimmer h-2 w-full rounded-full bg-gray-300"></div>
            <div className="animate-shimmer dark:dark-animate-shimmer h-2 w-full rounded-full bg-gray-300"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSkeletal;
