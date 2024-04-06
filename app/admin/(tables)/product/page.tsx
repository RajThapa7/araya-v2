"use client";
import useFetchProductList from "@/api/hooks/useFetchProducts";
import MyButton from "@/components/MyButton";
import MyCheckbox from "@/components/MyCheckbox/MyCheckbox";
import { useRouter } from "next-nprogress-bar";
import { FaEdit, FaEye } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const Page = () => {
  const router = useRouter();
  const { data } = useFetchProductList();

  return (
    <div className="flex-flex-col">
      <p className="text-2xl text-header">Products</p>
      <div className="flex flex-col items-end">
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
                Action
              </th>
            </tr>
          </thead>
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
                <td className="px-6 py-3">
                  <label className="relative cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 flex items-center bg-gray-300 rounded-full peer peer-checked:after:translate-x-full after:absolute after:left-[2px] peer-checked:after:border-white after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#007bff]"></div>
                  </label>
                </td>
                <td className="px-6 py-3">
                  <div className="flex flex-row gap-4 items-center">
                    <FaEye
                      size={18}
                      className="text-blue-600 hover:text-blue-800"
                      onClick={() => router.push(`/admin/product/${item._id}`)}
                    />
                    <FaEdit
                      className="text-accent hover:text-accent-dark"
                      size={18}
                    />
                    <RiDeleteBin6Line
                      className="text-red-600 hover:text-red-800"
                      size={18}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
