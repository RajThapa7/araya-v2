"use client";
import useEditCarouselItem from "@/api/hooks/carousel/useEditCarouselItem";
import useFetchCarouselById from "@/api/hooks/carousel/useFetchCarouselById";
import { montserrat } from "@/app/fonts";
import CloudImageManager from "@/components/CloudImageManager/CloudImageManager";
import ErrorHandler from "@/components/ErrorHandler/ErrorHandler";
import LoadingOverlay from "@/components/LoadingOverlay/LoadingOverlay";
import MultipleImageUploader from "@/components/MultipleImageUploader/MulitpleImageUploader";
import MyButton from "@/components/MyButton";
import MyCheckbox from "@/components/MyCheckbox/MyCheckbox";
import MyInput from "@/components/MyInput/MyInput";
import editCarouselItemSchema from "@/features/admin/carousel/edit/schema";
import { IFormData } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { Option, Select } from "@material-tailwind/react";
import { useRouter } from "next-nprogress-bar";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { IoMdArrowRoundBack } from "react-icons/io";
import { toast } from "react-toastify";

const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const { data, isLoading } = useFetchCarouselById(id);

  const defaultValues: any = {
    title: "",
    cloudImage: [],
    removedCloudImage: [],
    image: [],
    link: "",
    isVisible: null,
  };

  const router = useRouter();

  const formData: IFormData[] = [
    {
      id: 0,
      label: "Title",
      name: "title",
      placeholder: "Enter title of the carousel",
    },
    {
      id: 1,
      label: "Link",
      name: "link",
      placeholder: "Enter link for the carousel",
    },
    {
      id: 7,
      label: "Carousel Visible",
      name: "isVisible",
      placeholder: "",
      type: "checkbox",
    },
    {
      id: 9,
      label: "Images",
      name: "image",
      placeholder: "select image",
      type: "image",
    },
  ];

  const mutation = useEditCarouselItem(id);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors },
  } = useForm<any>({
    defaultValues: defaultValues,
    values: data, //updates the form data from the fetched data
    resolver: yupResolver(editCarouselItemSchema),
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
      <div className="mb-4 mt-2 inline-flex items-center gap-2">
        <IoMdArrowRoundBack
          className="text-xl text-accent hover:text-accent-dark"
          onClick={() => router.push("/admin/carousel")}
        />

        <h2 className="text-xl font-semibold text-accent-dark">
          Edit Carousel Item
        </h2>
      </div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6">
          {formData.map((item) => (
            <>
              {item.type === undefined && (
                <div key={item.id} className="flex flex-col gap-2">
                  <label htmlFor={item.name}>{item.label}</label>
                  <MyInput
                    type={"text"}
                    placeholder={item.placeholder}
                    {...register(item.name)}
                    error={errors[item.name]}
                  />
                </div>
              )}
              {item.type === "number" && (
                <div key={item.id} className="flex flex-col gap-2">
                  <label htmlFor={item.name}>{item.label}</label>
                  <MyInput
                    type={"number"}
                    placeholder={item.placeholder}
                    {...register(item.name)}
                    error={errors[item.name]}
                  />
                </div>
              )}
              {item.type === "dropdown" && (
                <div key={item.id} className="flex flex-col gap-2">
                  <label htmlFor={item.name}>{item.label}</label>
                  <Controller
                    control={control}
                    name={item.name}
                    render={({ field: { value, onChange, onBlur } }) => (
                      <Select
                        color="blue"
                        variant="outlined"
                        label={item.placeholder}
                        className={`bg-gray-100 ${montserrat.className}`}
                        error={!!errors[item.name]}
                        onChange={onChange}
                        onBlur={onBlur}
                      >
                        {item?.dropdownData?.map(({ label, value }) => (
                          <Option value={value} key={value}>
                            {label}
                          </Option>
                        ))}
                      </Select>
                    )}
                  />
                </div>
              )}

              {item.type === "image" && (
                <div className="flex flex-col gap-2">
                  <label>{item.label}</label>
                  <Controller
                    control={control}
                    name={item.name}
                    render={({ field: { onChange } }) => (
                      <MultipleImageUploader
                        onChange={onChange}
                        error={errors[item.name]}
                      />
                    )}
                  />
                </div>
              )}

              {item.type === "checkbox" && (
                <div className="flex flex-row items-center gap-2">
                  <label>{item.label}</label>
                  <Controller
                    control={control}
                    name={item.name}
                    render={({ field: { onChange, value } }) => (
                      <MyCheckbox onChange={onChange} checked={!!value} />
                    )}
                  />
                </div>
              )}
            </>
          ))}
        </div>

        {!isLoading && data && (
          <Controller
            control={control}
            name="cloudImage"
            render={({ field: { onChange } }) => (
              <CloudImageManager
                error={errors["cloudImage"]}
                onChange={onChange}
                setValue={setValue}
                images={[data.img]}
              />
            )}
          />
        )}

        <MyButton
          isLoading={mutation.isPending}
          className="mt-8 !p-4"
          type="submit"
        >
          Edit Product
        </MyButton>
      </form>
      <LoadingOverlay isVisible={mutation.isPending} />
    </div>
  );
};

export default Page;
