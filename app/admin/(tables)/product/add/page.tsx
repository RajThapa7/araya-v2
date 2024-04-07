"use client";
import useFetchCategories from "@/api/hooks/useFetchCategories";
import { montserrat } from "@/app/fonts";
import MultipleImageUploader from "@/components/MultipleImageUploader/MulitpleImageUploader";
import MyButton from "@/components/MyButton";
import MyInput from "@/components/MyInput/MyInput";
import addProductSchema from "@/features/admin/add/schema";
import { FormInputType, IFormData } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { Option, Select } from "@material-tailwind/react";
import { useRouter } from "next-nprogress-bar";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { IoMdArrowRoundBack } from "react-icons/io";

const defaultValues: FormInputType = {
  title: "",
  tag: "",
  category: "",
  price: null,
  reducedPrice: null,
  description: "",
  productHighlight: "",
  image: null,
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
      label: "Images",
      name: "image",
      placeholder: "select image",
      type: "image",
    },
  ];

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<any>({
    defaultValues: defaultValues,
    resolver: yupResolver(addProductSchema),
  });
  const onSubmit: SubmitHandler<FormInputType> = (data) => console.log(data);

  return (
    <div className="">
      <div className="inline-flex items-center gap-2 mt-2 mb-4">
        <IoMdArrowRoundBack
          className="text-xl text-accent hover:text-accent-dark"
          onClick={() => router.push("/admin/product")}
        />

        <h2 className=" font-semibold text-accent-dark text-xl">Add Product</h2>
      </div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-6 flex-col">
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
                        className={` bg-gray-100 ${montserrat.className}`}
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
            </>
          ))}
        </div>
        <MyButton className="!p-4 mt-8" type="submit">
          Add Product
        </MyButton>
      </form>
    </div>
  );
};

export default Page;
