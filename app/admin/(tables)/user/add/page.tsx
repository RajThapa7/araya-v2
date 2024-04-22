"use client";
import useAddProduct from "@/api/hooks/admin/useAddProduct";
import useFetchCategories from "@/api/hooks/categories/useFetchCategories";
import LoadingOverlay from "@/components/LoadingOverlay/LoadingOverlay";
import FormBuilder from "@/features/FormBuilder/FormBuilder";
import addProductSchema from "@/features/admin/product/add/schema";
import { IFormData } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { AxiosError } from "axios";
import { useRouter } from "next-nprogress-bar";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoMdArrowRoundBack } from "react-icons/io";
import { toast } from "react-toastify";

const defaultValues: any = {
  title: "",
  tag: "",
  category: "",
  price: null,
  reducedPrice: null,
  description: "",
  productHighlight: "",
  image: null,
  productCount: null,
  isProductVisible: true,
};

const Page = () => {
  const router = useRouter();
  const { data: categoryData } = useFetchCategories();

  const categoryDropdown = categoryData?.map(({ _id, categoryName }) => ({
    label: categoryName,
    value: _id,
  }));

  const formData: IFormData[] = [
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
      type: "dropdown",
      dropdownData: categoryDropdown || [],
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
    {
      id: 7,
      label: "Product Visible",
      name: "isProductVisible",
      placeholder: "",
      type: "checkbox",
    },
    {
      id: 8,
      label: "Product Count",
      name: "productCount",
      placeholder: "Enter the available product count",
      type: "number",
    },
    {
      id: 9,
      label: "Images",
      name: "image",
      placeholder: "select image",
      type: "image",
    },
  ];

  const mutation = useAddProduct();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<any>({
    defaultValues: defaultValues,
    resolver: yupResolver(addProductSchema),
  });

  const onSubmit: SubmitHandler<any> = (data) => {
    mutation.mutate(data, {
      onSuccess: (data) => {
        reset();
        toast.success(data.message);
        router.push("/admin/product");
      },
      onError: (error) => {
        if (error instanceof AxiosError) {
          toast.error(error?.response?.data?.message);
        }
      },
      onSettled: () => {},
    });
  };

  return (
    <div className="">
      <LoadingOverlay isVisible={mutation.isPending} />
      <div className="inline-flex items-center gap-2 mt-2 mb-4">
        <IoMdArrowRoundBack
          className="text-xl text-accent hover:text-accent-dark"
          onClick={() => router.push("/admin/product")}
        />

        <h2 className=" font-semibold text-accent-dark text-xl">Add Product</h2>
      </div>
      <FormBuilder
        {...{ errors, formData, handleSubmit, onSubmit, register, control }}
      />
    </div>
  );
};

export default Page;
