import { MyRating } from "../Rating";

export default function ReviewItem() {
  return (
    <div className="w-full pt-6 flex flex-col gap-3 border-b-2 border-gray-300 pb-8 last:border-none">
      <MyRating value={2} />
      <div className="flex flex-col gap-5">
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
          asperiores.
        </p>
        <div className="flex flex-row gap-4">
          <p className="text-sm font-bold text-gray-900">John Doe</p>
          <p className="text-sm text-gray-600">April 3, 2019</p>
        </div>
      </div>
    </div>
  );
}
