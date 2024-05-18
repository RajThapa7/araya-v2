import { openModal } from "@/lib/modal/modalSlice";
import Image from "next/image";
import { useEffect, useState } from "react";
import { UseFormSetValue } from "react-hook-form";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";

const CloudImageManager = ({
  images,
  onChange,
  error,
  setValue,
}: {
  images: string[];
  onChange: any;
  error: any;
  setValue: UseFormSetValue<any>;
}) => {
  const [cloudImageArray, setCloudImageArray] = useState<string[]>(images);

  useEffect(() => {
    setValue("cloudImage", images);
  }, []);

  const [removedArr, setRemovedArr] = useState<string[]>([]);

  const dispatch = useDispatch();

  const handleImageRemove = (e: any, indexToRemove: number) => {
    setCloudImageArray((prevImages) =>
      prevImages.filter((_, index) => index !== indexToRemove)
    );
    setRemovedArr((prev) => [...prev, cloudImageArray[indexToRemove]]);
    setValue("removedCloudImage", [
      ...removedArr,
      cloudImageArray[indexToRemove],
    ]),
      onChange(
        cloudImageArray.filter((_, index) => index !== indexToRemove) as any
      );
    e.stopPropagation();
  };

  return (
    <div
      className={`${
        cloudImageArray.length === 0 ? "hidden" : "flex"
      } flex-col gap-2`}
    >
      <p className="">Uploaded Images</p>
      <div className="flex flex-row gap-14">
        {cloudImageArray?.map((item, index) => (
          <div
            className="relative aspect-square w-32 group hover:ring-1 ring-accent transition"
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
                          src={item}
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
            <MdDelete
              onClick={(e: any) => handleImageRemove(e, index)}
              className="absolute right-2 top-2 text-body cursor-pointer hidden group-hover:flex transition"
            />
          </div>
        ))}
      </div>
      {/* error message */}
      <p className="text-sm text-red-400 mt-2">{error?.message}</p>
    </div>
  );
};

export default CloudImageManager;
