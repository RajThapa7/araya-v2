"use client";
import { useAppDispatch } from "@/lib/hooks";
import { openModal } from "@/lib/modal/modalSlice";
import getRelativeDate from "@/utils/getRelativeDate";
import Image from "next/image";
import { MyRating } from "../Rating";

export default function ReviewItem({
  review,
  rating,
  username,
  date,
  img,
}: {
  review: string;
  rating: number;
  username: string;
  date: Date;
  img: string[];
}) {
  const dispatch = useAppDispatch();
  return (
    <div className="w-full pt-6 flex flex-col gap-3 border-b-2 border-gray-300 pb-3 last:border-none">
      <div className="items-center justify-between flex flex-row">
        <div className="flex flex-row items-center gap-5">
          <MyRating value={rating} />
          <p className="text-sm font-semibold text-body">{username}</p>
        </div>
        <p className="text-sm text-gray-600">
          {getRelativeDate(new Date(date))}
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-sm">{review}</p>

        <div className="flex flex-row gap-14">
          {img?.map((item) => (
            <div
              className="relative aspect-square w-28 hover:ring-1 ring-accent transition"
              onClick={() => {
                dispatch(
                  openModal({
                    content: (
                      <div className="flex items-center justify-center bg-transparent">
                        <div className="relative h-[calc(100vh-10rem)] w-full flex">
                          <Image
                            alt="featured_image"
                            className="object-contain"
                            fill
                            src={item || ""}
                          />
                        </div>
                      </div>
                    ),
                  })
                );
              }}
              key={item}
            >
              <Image
                key={item}
                alt="featured_image"
                className="object-contain"
                fill
                src={item}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
