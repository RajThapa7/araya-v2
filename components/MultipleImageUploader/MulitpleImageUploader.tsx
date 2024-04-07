"use client";
import { Modal } from "@/components/Modal/Modal";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";

const MultipleImageUploader = () => {
  const [images, setImages] = useState<File[]>([]);
  // for modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [image, setImage] = useState<string>();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setImages((prevImages) => [...prevImages, ...Array.from(files)]);
    }
  };

  const handleImageRemove = (e: any, indexToRemove: number) => {
    setImages((prevImages) =>
      prevImages.filter((_, index) => index !== indexToRemove)
    );
    e.stopPropagation();
  };

  return (
    <div>
      {images.length === 0 && (
        <label
          htmlFor="fileInput"
          className="bg-gray-100 border-[1px] border-black border-dashed flex flex-col items-center cursor-pointer py-4 gap-1"
        >
          <span>No image uploaded</span>
          <span className="text-accent-dark">Click here to upload images</span>
        </label>
      )}
      <input
        type="file"
        id="fileInput"
        multiple
        onChange={(e) => handleInputChange(e)}
        accept="image/*"
        className="hidden"
      />
      <div className="flex flex-wrap mt-4 gap-6">
        {images.map((file, index) => (
          <div
            className="relative aspect-square w-32 group hover:ring-1 ring-accent transition"
            onClick={() => {
              setImage(URL.createObjectURL(file));
              setIsModalOpen(true);
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
      {/* image modal */}
      <Modal open={isModalOpen} setOpen={setIsModalOpen}>
        <div className="flex items-center justify-center bg-transparent">
          <div className="relative h-[calc(100vh-10rem)] w-full flex">
            <Image
              alt="featured_image"
              className="object-contain"
              fill
              src={image || ""}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

const imageStyles = {
  width: "150px",
  height: "150px",
  margin: "10px",
  borderRadius: "4px",
  overflow: "hidden",
};

export default MultipleImageUploader;
