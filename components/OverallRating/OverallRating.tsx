import ProgressBar from "../ProgressBar/ProgressBar";
import { MyRating } from "../Rating";

export default function OverallRating({
  reviewCount,
  averageRating,
  reviewArray,
}: {
  reviewCount: number;
  averageRating: number;
  reviewArray: number[];
}) {
  return (
    <div className="gap-5 flex flex-col flex-1 max-w-md">
      <p className="text-gray-900 text-lg">Based on {reviewCount} Reviews</p>
      <div className="flex flex-col">
        <p className="font-bold text-2xl text-gray-800">
          {averageRating.toFixed(2)}
        </p>
        <p className="text-sm -mt-1">overall</p>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-row items-center gap-12">
          <MyRating value={5} />
          <div className="flex flex-row w-full items-center gap-4">
            <ProgressBar
              value={(100 * reviewArray[4]) / reviewCount}
              color="light-blue"
            />
            <p className="text-sm text-gray-800">{reviewArray[4]}</p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-12">
          <MyRating value={4} />
          <div className="flex flex-row w-full items-center gap-4">
            <ProgressBar
              value={(100 * reviewArray[3]) / reviewCount}
              color="light-blue"
            />
            <p className="text-sm text-gray-800">{reviewArray[3]}</p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-12">
          <MyRating value={3} />
          <div className="flex flex-row w-full items-center gap-4">
            <ProgressBar
              value={(100 * reviewArray[2]) / reviewCount}
              color="light-blue"
            />
            <p className="text-sm text-gray-800">{reviewArray[2]}</p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-12">
          <MyRating value={2} />
          <div className="flex flex-row w-full items-center gap-4">
            <ProgressBar
              value={(100 * reviewArray[1]) / reviewCount}
              color="light-blue"
            />
            <p className="text-sm text-gray-800">{reviewArray[1]}</p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-12">
          <MyRating value={1} />
          <div className="flex flex-row w-full items-center gap-4">
            <ProgressBar
              value={(100 * reviewArray[0]) / reviewCount}
              color="light-blue"
            />
            <p className="text-sm text-gray-800">{reviewArray[0]}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
