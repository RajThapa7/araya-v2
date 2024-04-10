"use client";
import useAddCategory from "@/api/hooks/useAddCategory";
import LoadingOverlay from "@/components/LoadingOverlay/LoadingOverlay";
import FormBuilder from "@/features/FormBuilder/FormBuilder";
import addCategorySchema from "@/features/category/add/schema";
import { IFormData } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { AxiosError } from "axios";
import { useRouter } from "next-nprogress-bar";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoMdArrowRoundBack } from "react-icons/io";
import { toast } from "react-toastify";

const defaultValues: any = {
  categoryName: "",
};

const Page = () => {
  const router = useRouter();

  const formData: IFormData[] = [
    {
      id: 0,
      label: "Category Name",
      name: "categoryName",
      placeholder: "Enter a Category Name",
    },
  ];

  const mutation = useAddCategory();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<any>({
    defaultValues: defaultValues,
    resolver: yupResolver(addCategorySchema),
  });
  const onSubmit: SubmitHandler<any> = (data) => {
    mutation.mutate(data, {
      onSuccess: (data) => {
        reset();
        toast.success(data.message);
        router.push("/admin/category");
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
          onClick={() => router.push("/admin/category")}
        />

        <h2 className=" font-semibold text-accent-dark text-xl">
          Add Category
        </h2>
      </div>
      <FormBuilder
        {...{ errors, formData, handleSubmit, onSubmit, register, control }}
      />
    </div>
  );
};

export default Page;
