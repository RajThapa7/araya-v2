export default function TableSkeletal() {
  const arr = Array.from(Array(6).keys());
  return (
    <div className=" mb-10">
      {arr.map((index: number) => (
        <div
          key={index}
          className=" flex w-full flex-row gap-x-8 border-b-[1px] border-t-[1px] border-gray-300 bg-white  px-4 pt-3 pb-2 dark:border-gray-600 dark:bg-gray-800"
        >
          <div className=" flex w-2/5 flex-row items-center space-x-4">
            <div className="animate-shimmer dark:dark-animate-shimmer rounded-full bg-gray-200 p-4"></div>
            <div className="flex w-full flex-col space-y-2">
              <div className="animate-shimmer dark:dark-animate-shimmer h-2 rounded-full bg-gray-200 "></div>
              <div className="animate-shimmer dark:dark-animate-shimmer h-2 w-[80%] rounded-full bg-gray-300"></div>
            </div>
          </div>
          <div className=" flex min-w-[10%] grow flex-col justify-center space-y-2">
            <div className="animate-shimmer  dark:dark-animate-shimmer h-2 rounded-full bg-gray-200"></div>
            <div className="animate-shimmer dark:dark-animate-shimmer h-2 w-[80%] rounded-full bg-gray-300"></div>
          </div>
          <div className="flex min-w-[10%] grow flex-col justify-center space-y-2">
            <div className="animate-shimmer  dark:dark-animate-shimmer h-2 rounded-full bg-gray-200"></div>
            <div className="animate-shimmer dark:dark-animate-shimmer h-2 w-[80%] rounded-full bg-gray-300"></div>
          </div>
          <div className="flex min-w-[10%] grow flex-col justify-center space-y-2">
            <div className="animate-shimmer  dark:dark-animate-shimmer h-2 rounded-full bg-gray-200"></div>
            <div className="animate-shimmer dark:dark-animate-shimmer h-2 w-[80%] rounded-full bg-gray-300"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
