"use client";
import useFetchCarouselById from "@/api/hooks/carousel/useFetchCarouselById";
import Loading from "@/app/loading";
import { Modal } from "@/components/Modal/Modal";
import { useRouter } from "next-nprogress-bar";
import Image from "next/image";
import { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";

const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const { data, isLoading } = useFetchCarouselById(id);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [image, setImage] = useState<string>();
  const router = useRouter();
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="inline-flex items-center gap-2 mt-2 mb-4">
            <IoMdArrowRoundBack
              className="text-xl text-accent hover:text-accent-dark"
              onClick={() => router.push("/admin/carousel")}
            />

            <h2 className=" font-semibold text-accent-dark text-xl">
              Carousel Description
            </h2>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <p className="text-body font-semibold">ID</p>
              <p>{data?._id}</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-body font-semibold">Title</p>
              <p>{data?.title}</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-body font-semibold">Link</p>
              <p>{data?.link}</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-body font-semibold">Visibility</p>
              <p>
                {data?.isVisible ? (
                  <span className="w-fit text-primary whitespace-nowrap bg-blue-400 px-3 py-1.5 text-xs font-medium">
                    YES
                  </span>
                ) : (
                  <span className="w-fit whitespace-nowrap text-primary bg-red-400 px-3 py-1.5 text-xs font-medium">
                    NO
                  </span>
                )}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-body font-semibold">Image</p>
              <div className="flex flex-row gap-14">
                <div
                  className="relative aspect-square w-32 hover:ring-1 ring-accent transition"
                  onClick={() => {
                    setImage(data?.img);
                    setIsModalOpen(true);
                  }}
                >
                  <Image
                    alt="featured_image"
                    className="object-contain"
                    fill
                    src={data?.img || ""}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-body font-semibold">Created at</p>
              <p>{new Date(data?.createdAt || "").toString()}</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-body font-semibold">Updated at</p>
              <p>{new Date(data?.updatedAt || "").toString()}</p>
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
        </>
      )}
    </>
  );
};

export default Page;
