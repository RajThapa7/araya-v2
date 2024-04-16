"use client";
import useAddCarouselItem from "@/api/hooks/carousel/useAddCarouselItem";
import ErrorHandler from "@/components/ErrorHandler/ErrorHandler";
import LoadingOverlay from "@/components/LoadingOverlay/LoadingOverlay";
import FormBuilder from "@/features/FormBuilder/FormBuilder";
import addCarouselSchema from "@/features/admin/carousel/add/schema";
import { IFormData } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next-nprogress-bar";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoMdArrowRoundBack } from "react-icons/io";
import { toast } from "react-toastify";

const defaultValues: any = {
  title: "",
  link: "",
  image: null,
  isVisible: true,
};

const Page = () => {
  const router = useRouter();

  const formData: IFormData[] = [
    {
      id: 0,
      label: "Title",
      name: "title",
      placeholder: "Enter title of the carousel",
    },
    {
      id: 5,
      label: "Link",
      name: "link",
      placeholder: "Enter the link for the carousel",
    },
    {
      id: 7,
      label: "Carousel Visibility",
      name: "isVisible",
      placeholder: "",
      type: "checkbox",
    },
    {
      id: 9,
      label: "Image",
      name: "image",
      placeholder: "select image",
      type: "image",
    },
  ];

  const mutation = useAddCarouselItem();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<any>({
    defaultValues: defaultValues,
    resolver: yupResolver(addCarouselSchema),
  });
  const onSubmit: SubmitHandler<any> = (data) => {
    mutation.mutate(data, {
      onSuccess: (data) => {
        reset();
        toast.success(data.message);
        router.push("/admin/carousel");
      },
      onError: (error) => {
        ErrorHandler(error);
      },
    });
  };

  return (
    <div className="">
      <LoadingOverlay isVisible={mutation.isPending} />
      <div className="inline-flex items-center gap-2 mt-2 mb-4">
        <IoMdArrowRoundBack
          className="text-xl text-accent hover:text-accent-dark"
          onClick={() => router.push("/admin/carousel")}
        />

        <h2 className=" font-semibold text-accent-dark text-xl">
          Add Carousel Item
        </h2>
      </div>
      <FormBuilder
        buttonLabel="Add Carousel Item"
        {...{ errors, formData, handleSubmit, onSubmit, register, control }}
      />
    </div>
  );
};

export default Page;
