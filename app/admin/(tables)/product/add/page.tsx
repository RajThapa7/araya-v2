"use client";
import useFetchCategories from "@/api/hooks/useFetchCategories";
import MyButton from "@/components/MyButton";
import MyInput from "@/components/MyInput/MyInput";
import { useRouter } from "next-nprogress-bar";
import { IoMdArrowRoundBack } from "react-icons/io";

const Page = () => {
  const router = useRouter();
  const { data: categoryData } = useFetchCategories();
  const formData = [
    {
      id: 0,
      label: "Title",
      name: "title",
      placeholder: "Enter title of the product",
    },
    {
      id: 1,
      label: "Tag",
      name: "tag",
      placeholder: "Enter tag for the product",
    },
    {
      id: 6,
      label: "Category",
      name: "category",
      placeholder: "Select Category of the product",
    },
    {
      id: 2,
      label: "Price",
      name: "price",
      placeholder: "Enter price of the product",
      type: "number",
    },
    {
      id: 3,
      label: "Discounted Price",
      name: "reducedPrice",
      placeholder: "Enter reduced price for the product if exists",
      type: "number",
    },
    {
      id: 4,
      label: "Description",
      name: "description",
      placeholder: "Enter description of the product",
    },
    {
      id: 5,
      label: "Product Highlight",
      name: "productHighlight",
      placeholder: "Enter the product highlights",
    },
  ];

  return (
    <div className="">
      <div className="inline-flex items-center gap-2 mt-2 mb-4">
        <IoMdArrowRoundBack
          className="text-xl text-accent hover:text-accent-dark"
          onClick={() => router.push("/admin/product")}
        />

        <h2 className=" font-semibold text-accent-dark text-xl">Add Product</h2>
      </div>
      <form action="">
        <div className="flex gap-6 flex-col">
          {formData.map((item) => (
            <div key={item.id} className="flex flex-col gap-2">
              <label htmlFor={item.name}>{item.label}</label>
              <MyInput
                type={item?.type || "text"}
                name={item.name}
                placeholder={item.placeholder}
              />
            </div>
          ))}
        </div>
        <MyButton className="!p-4 mt-8">Add Product</MyButton>
      </form>
    </div>
  );
};

export default Page;
