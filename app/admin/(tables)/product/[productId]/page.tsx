"use client";
import useFetchProductById from "@/api/hooks/products/useFetchProductById";
import Loading from "@/app/loading";
import { openModal } from "@/lib/modal/modalSlice";
import { useRouter } from "next-nprogress-bar";
import Image from "next/image";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useDispatch } from "react-redux";

const Page = ({ params }: { params: { productId: string } }) => {
  const { productId } = params;
  const { data, isLoading } = useFetchProductById(productId);
  const dispatch = useDispatch();

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
              onClick={() => router.push("/admin/product")}
            />

            <h2 className=" font-semibold text-accent-dark text-xl">
              Product Description
            </h2>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <p className="text-body font-semibold">Product ID</p>
              <p>{data?._id}</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-body font-semibold">Product Name</p>
              <p>{data?.title}</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-body font-semibold">Category</p>
              <p>{data?.category?.categoryName}</p>
            </div>
            <div className={`flex-col gap-2 ${data?.tag ? "flex" : "hidden"}`}>
              <p className="text-body font-semibold">Tag</p>
              <p>{data?.tag}</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-body font-semibold">Price</p>
              <p>Rs. {data?.price}</p>
            </div>
            <div
              className={`flex-col gap-2 ${
                data?.reducedPrice ? "flex" : "hidden"
              }`}
            >
              <p className="text-body font-semibold">Reduced Price</p>
              <p>Rs. {data?.reducedPrice}</p>
            </div>
            <div
              className={`flex-col gap-2 ${
                data?.reducedPrice ? "flex" : "hidden"
              }`}
            >
              <p className="text-body font-semibold">Discount Percentage</p>
              <p>{data?.discountPercentage}%</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-body font-semibold">Description</p>
              <p>{data?.description}</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-body font-semibold">Product Highlight</p>
              <p>{data?.productHighlight}</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-body font-semibold">Featured Image</p>
              <div
                className="relative aspect-square w-32 hover:ring-1 ring-accent transition"
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
                              src={data?.featured_img || ""}
                            />
                          </div>
                        </div>
                      ),
                    })
                  );
                }}
              >
                <Image
                  alt="featured_image"
                  className="object-contain"
                  fill
                  src={data?.featured_img || ""}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-body font-semibold">Images</p>
              <div className="flex flex-row gap-14">
                {data?.img?.map((item) => (
                  <div
                    className="relative aspect-square w-32 hover:ring-1 ring-accent transition"
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
            <div className="flex flex-col gap-2">
              <p className="text-body font-semibold">Created at</p>
              <p>{new Date(data?.createdAt || "").toString()}</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-body font-semibold">Updated at</p>
              <p>{new Date(data?.updatedAt || "").toString()}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Page;
