import ProgressBar from "../ProgressBar/ProgressBar";
import { MyRating } from "../Rating";

export default function OverallRating() {
  return (
    <div className="gap-5 flex flex-col flex-1 max-w-md">
      <p className="text-gray-900 text-lg">Based on 3 Reviews</p>
      <div className="flex flex-col">
        <p className="font-bold text-2xl text-gray-800">4.3</p>
        <p className="text-sm -mt-1">overall</p>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-row items-center gap-12">
          <MyRating value={4} />
          <div className="flex flex-row w-full items-center gap-4">
            <ProgressBar value={40} color="light-blue" />
            <p className="text-sm text-gray-800">205</p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-12">
          <MyRating value={4} />
          <div className="flex flex-row w-full items-center gap-4">
            <ProgressBar value={40} color="light-blue" />
            <p className="text-sm text-gray-800">205</p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-12">
          <MyRating value={4} />
          <div className="flex flex-row w-full items-center gap-4">
            <ProgressBar value={40} color="light-blue" />
            <p className="text-sm text-gray-800">205</p>
          </div>
        </div>
      </div>
    </div>
  );
}
