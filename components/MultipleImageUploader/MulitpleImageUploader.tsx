"use client";
import { openModal } from "@/lib/modal/modalSlice";
import Image from "next/image";
import {
  ChangeEvent,
  ForwardedRef,
  InputHTMLAttributes,
  forwardRef,
  useEffect,
  useState,
} from "react";
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";

interface MyInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  // error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  error?: any;
  isFormSettled?: boolean;
}

const MultipleImageUploader = forwardRef(
  (props: MyInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const [images, setImages] = useState<File[]>([]);

    //clear the image preview data when the form is settled
    useEffect(() => {
      props.isFormSettled && setImages([]);
    }, [props.isFormSettled]);

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
        prevImages.filter((_, index) => index !== indexToRemove),
      );
      props.onChange &&
        props.onChange(
          images.filter((_, index) => index !== indexToRemove) as any,
        );
      e.stopPropagation();
    };

    return (
      <div>
        {images.length === 0 && (
          <label
            htmlFor="fileInput"
            className={`flex cursor-pointer flex-col items-center gap-1 border-[1px] border-dashed border-black bg-gray-100 py-4 ${
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
        <p className="mt-2 text-sm text-red-400">{props.error?.message}</p>
        <input
          ref={ref}
          type="file"
          id="fileInput"
          multiple
          onChange={handleInputChange}
          accept="image/*"
          className="hidden"
        />
        <div className="mt-4 flex flex-wrap gap-6">
          {images.map((file, index) => (
            <div
              className="group relative aspect-square w-32 ring-accent transition hover:ring-1"
              onClick={() => {
                dispatch(
                  openModal({
                    content: (
                      <div className="flex items-center justify-center bg-transparent">
                        <div className="relative aspect-video w-full bg-transparent">
                          <Image
                            alt="featured_image"
                            className="object-contain"
                            fill
                            src={URL.createObjectURL(file)}
                          />
                        </div>
                      </div>
                    ),
                  }),
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
                className="absolute right-2 top-2 hidden cursor-pointer text-body transition group-hover:flex"
              />
            </div>
          ))}
          {images.length !== 0 && (
            <label
              htmlFor="fileInput"
              className="flex cursor-pointer flex-col items-center justify-center gap-2 border-[1px] border-dashed border-black bg-gray-100 px-10"
            >
              <IoMdAdd />
              <span className="text-accent-dark">Add Image</span>
            </label>
          )}
        </div>
      </div>
    );
  },
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
