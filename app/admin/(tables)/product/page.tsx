"use client";
import useDeleteProduct from "@/api/hooks/admin/useDeleteProduct";
import useFetchProductList from "@/api/hooks/products/useFetchProducts";
import LoadingOverlay from "@/components/LoadingOverlay/LoadingOverlay";
import MyButton from "@/components/MyButton";
import MyCheckbox from "@/components/MyCheckbox/MyCheckbox";
import { Pagination } from "@/components/Pagination/Pagination";
import TableSkeletal from "@/components/Skeletal/TableSkeletal";
import { AxiosError } from "axios";
import { useRouter } from "next-nprogress-bar";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { FaEdit, FaEye } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast } from "react-toastify";

const Page = () => {
  const router = useRouter();
  const { data, isLoading } = useFetchProductList(null);
  const mutation = useDeleteProduct();
  const pathname = usePathname();

  const handleDelete = (id: any) => {
    mutation.mutate(id, {
      onSuccess: (data) => {
        toast.success(data.message);
      },
      onError: (error) => {
        if (error instanceof AxiosError) {
          toast.error(error?.response?.data?.message);
        }
      },
    });
  };

  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handlePageClick = (e: any) => {
    const activePageNumber = e.selected + 1;
    router.push(pathname + "?" + createQueryString("page", activePageNumber));
  };

  const handleCountChange = (e: any) => {
    const resultPerPage = e.target.value;
    router.push(pathname + "?" + createQueryString("limit", resultPerPage));
  };

  const page = searchParams.get("page") || ("1" as string);
  const limit = searchParams.get("limit") || ("10" as string);

  // to display the range of data displayed on top of table
  const initialLimit = (parseInt(page) - 1) * parseInt(limit) + 1;
  const finalLimit = initialLimit - 1 + (data?.count || 10);

  return (
    <div className="flex-flex-col">
      <LoadingOverlay isVisible={mutation.isPending} />
      <p className="text-2xl text-header">Products</p>
      <div className="flex flex-row mt-6 items-center justify-between">
        <div className="text-sm">
          Showing results
          <span className="text-accent font-semibold">
            {" "}
            {initialLimit} - {finalLimit}{" "}
          </span>
          out of{" "}
          <span className="text-accent font-semibold"> {data?.totalCount}</span>
        </div>
        <MyButton
          onClick={() => router.push(`/admin/product/add`)}
          className="!py-2"
        >
          Add New
        </MyButton>
      </div>

      {/* table */}
      <div className="overflow-x-scroll py-8">
        <table className=" bg-white w-full font-[sans-serif]">
          <thead className="whitespace-nowrap">
            <tr>
              <th>
                <MyCheckbox color="green" onChange={(e) => {}} />
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-black">
                Title
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-black">
                Category
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-black">
                Price
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-black">
                Discounted Price
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-black">
                Discount Percentage
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-black">
                Tag
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-black">
                Product Count
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-black">
                Stock Available
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-black">
                Visibility
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-black">
                Action
              </th>
            </tr>
          </thead>

          {!isLoading && data?.data.length !== 0 && (
            <tbody className="whitespace-nowrap">
              {data?.data?.map((item) => (
                <tr className="odd:bg-accent odd:bg-opacity-10" key={item._id}>
                  <td className="w-8">
                    <MyCheckbox color="green" onChange={(e) => {}} />
                  </td>

                  <td className="px-6 py-3 text-sm">{item.title}</td>
                  <td className="px-6 py-3 text-sm">
                    {item.category.categoryName}
                  </td>
                  <td className="px-6 py-3 text-sm">{item.price}</td>
                  <td className="px-6 py-3 text-sm">
                    {item?.reducedPrice || "_"}
                  </td>
                  <td className="px-6 py-3 text-sm">
                    {item.discountPercentage}%
                  </td>
                  <td className="px-6 py-3 text-sm">{item?.tag || "_"}</td>
                  <td className="px-6 py-3 text-sm">
                    {item?.productCount || "_"}
                  </td>
                  <td className="px-6 py-3 text-sm">
                    {item.isStockAvailable ? (
                      <span className="w-fit text-primary whitespace-nowrap bg-blue-400 px-3 py-1.5 text-xs font-medium">
                        YES
                      </span>
                    ) : (
                      <span className="w-fit whitespace-nowrap text-primary bg-red-400 px-3 py-1.5 text-xs font-medium">
                        NO
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-3 text-sm">
                    {item.isProductVisible ? (
                      <span className="w-fit text-primary whitespace-nowrap bg-blue-400 px-3 py-1.5 text-xs font-medium">
                        YES
                      </span>
                    ) : (
                      <span className="w-fit whitespace-nowrap text-primary bg-red-400 px-3 py-1.5 text-xs font-medium">
                        NO
                      </span>
                    )}
                  </td>

                  <td className="px-6 py-3">
                    <div className="flex flex-row gap-4 items-center">
                      <FaEye
                        size={18}
                        className="text-blue-600 hover:text-blue-800"
                        onClick={() =>
                          router.push(`/admin/product/${item._id}`)
                        }
                      />
                      <FaEdit
                        className="text-accent hover:text-accent-dark"
                        size={18}
                        onClick={() =>
                          router.push(`/admin/product/edit/${item._id}`)
                        }
                      />
                      <RiDeleteBin6Line
                        className="text-red-600 hover:text-red-800"
                        size={18}
                        onClick={() => handleDelete(item._id)}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>

        {/* show empty component */}
        {data?.data.length === 0 && (
          <div className="flex flex-col items-center justify-center gap-4 py-6">
            <Image
              src={require("@/public/no_data.svg")}
              alt="no data"
              width={100}
              height={100}
            />
            <p className="font-semibold">No data to show</p>
          </div>
        )}

        {/* skeletal loading */}
        {isLoading && <TableSkeletal />}
      </div>

      {/* pagination */}
      <Pagination
        {...{ handleCountChange, handlePageClick }}
        totalPageCount={data?.totalPages || 1}
      />
    </div>
  );
};

export default Page;
