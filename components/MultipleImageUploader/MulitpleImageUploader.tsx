"use client";
import { openModal } from "@/lib/modal/modalSlice";
import Image from "next/image";
import {
  ChangeEvent,
  ForwardedRef,
  InputHTMLAttributes,
  forwardRef,
  useState,
} from "react";
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";

interface MyInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  // error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  error?: any;
}

const MultipleImageUploader = forwardRef(
  (props: MyInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const [images, setImages] = useState<File[]>([]);

    const dispatch = useDispatch();

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      if (files) {
        setImages((prevImages) => [...prevImages, ...Array.from(files)]);
        props.onChange &&
          props.onChange([...images, ...Array.from(files)] as any);
      }
    };

    const handleImageRemove = (e: any, indexToRemove: number) => {
      setImages((prevImages) =>
        prevImages.filter((_, index) => index !== indexToRemove)
      );
      props.onChange &&
        props.onChange(
          images.filter((_, index) => index !== indexToRemove) as any
        );
      e.stopPropagation();
    };

    return (
      <div>
        {images.length === 0 && (
          <label
            htmlFor="fileInput"
            className={`bg-gray-100 border-[1px] border-black border-dashed flex flex-col items-center cursor-pointer py-4 gap-1 ${
              props.error && "border-red-500"
            }`}
          >
            <span>No image uploaded</span>
            <span className="text-accent-dark">
              Click here to upload images
            </span>
          </label>
        )}
        {/* error message */}
        <p className="text-sm text-red-400 mt-2">{props.error?.message}</p>
        <input
          ref={ref}
          type="file"
          id="fileInput"
          multiple
          onChange={handleInputChange}
          accept="image/*"
          className="hidden"
        />
        <div className="flex flex-wrap mt-4 gap-6">
          {images.map((file, index) => (
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
                            src={URL.createObjectURL(file)}
                          />
                        </div>
                      </div>
                    ),
                  })
                );
              }}
              key={index}
            >
              <Image
                alt="featured_image"
                className="object-contain"
                fill
                src={URL.createObjectURL(file)}
              />
              <MdDelete
                onClick={(e: any) => handleImageRemove(e, index)}
                className="absolute right-2 top-2 text-body cursor-pointer hidden group-hover:flex transition"
              />
            </div>
          ))}
          {images.length !== 0 && (
            <label
              htmlFor="fileInput"
              className="bg-gray-100 border-[1px] border-black border-dashed flex flex-col justify-center items-center cursor-pointer gap-2 px-10"
            >
              <IoMdAdd />
              <span className="text-accent-dark">Add Image</span>
            </label>
          )}
        </div>
      </div>
    );
  }
);

const imageStyles = {
  width: "150px",
  height: "150px",
  margin: "10px",
  borderRadius: "4px",
  overflow: "hidden",
};

MultipleImageUploader.displayName = "MultipleImageUploader";
export default MultipleImageUploader;
