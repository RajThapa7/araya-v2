"use client";
import useDeleteProduct from "@/api/hooks/useDeleteProduct";
import useFetchCategories from "@/api/hooks/useFetchCategories";
import LoadingOverlay from "@/components/LoadingOverlay/LoadingOverlay";
import MyButton from "@/components/MyButton";
import MyCheckbox from "@/components/MyCheckbox/MyCheckbox";
import TableSkeletal from "@/components/Skeletal/TableSkeletal";
import { AxiosError } from "axios";
import { useRouter } from "next-nprogress-bar";
import Image from "next/image";
import { FaEdit, FaEye } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast } from "react-toastify";

const Page = () => {
  const router = useRouter();
  const { data, isLoading } = useFetchCategories();
  const mutation = useDeleteProduct();

  const handleDelete = (id: string) => {
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

  return (
    <div className="flex-flex-col">
      <LoadingOverlay isVisible={mutation.isPending} />
      <p className="text-2xl text-header">Categories</p>
      <div className="flex flex-row mt-6 items-center justify-end">
        <MyButton
          onClick={() => router.push(`/admin/category/add`)}
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
                Id
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-black">
                Category Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-black">
                Category Slug
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-black">
                Product Count
              </th>

              <th className="px-6 py-3 text-left text-sm font-semibold text-black">
                Action
              </th>
            </tr>
          </thead>

          {!isLoading && data?.length !== 0 && (
            <tbody className="whitespace-nowrap">
              {data &&
                data?.map((item) => (
                  <tr
                    className="odd:bg-accent odd:bg-opacity-10"
                    key={item._id}
                  >
                    <td className="w-8">
                      <MyCheckbox color="green" onChange={(e) => {}} />
                    </td>

                    <td className="px-6 py-3 text-sm">{item._id}</td>
                    <td className="px-6 py-3 text-sm">{item.categoryName}</td>
                    <td className="px-6 py-3 text-sm">{item.slug}</td>
                    <td className="px-6 py-3 text-sm">{item.productCount}</td>

                    <td className="px-6 py-3">
                      <div className="flex flex-row gap-4 items-center">
                        <FaEye
                          size={18}
                          className="text-blue-600 hover:text-blue-800"
                          onClick={() =>
                            router.push(`/admin/category/${item.slug}`)
                          }
                        />
                        <FaEdit
                          className="text-accent hover:text-accent-dark"
                          size={18}
                          onClick={() =>
                            router.push(`/admin/category/edit/${item._id}`)
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
        {data?.length === 0 && (
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
    </div>
  );
};

export default Page;
