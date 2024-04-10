import { montserrat } from "@/app/fonts";
import MultipleImageUploader from "@/components/MultipleImageUploader/MulitpleImageUploader";
import MyButton from "@/components/MyButton";
import MyCheckbox from "@/components/MyCheckbox/MyCheckbox";
import MyInput from "@/components/MyInput/MyInput";
import { FormInputType, IFormData } from "@/types";
import { Option, Select } from "@material-tailwind/react";
import {
  Control,
  Controller,
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

interface IFormBuilderProps {
  formData: IFormData[];
  register: UseFormRegister<FormInputType>;
  errors: FieldErrors<FormInputType>;
  control?: Control<FormInputType>;
  handleSubmit: UseFormHandleSubmit<FormInputType, undefined>;
  onSubmit: SubmitHandler<FormInputType>;
  buttonLabel?: string;
  isEditPage?: boolean;
}

const FormBuilder = ({
  formData,
  register,
  handleSubmit,
  onSubmit,
  control,
  errors,
  buttonLabel,
  isEditPage = false,
}: IFormBuilderProps) => {
  return (
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
      {isEditPage && (
        <div>
          <label>Edit Image</label>
          <MyCheckbox onChange={() => {}} checked={false} />
        </div>
      )}
      <MyButton className="!p-4 mt-8" type="submit">
        {buttonLabel || "Add Product"}
      </MyButton>
    </form>
  );
};

export default FormBuilder;
