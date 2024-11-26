import useAddDeliveryAddress from "@/api/hooks/delivery-address/useAddDeliveryAddress";
import ErrorHandler from "@/components/ErrorHandler/ErrorHandler";
import FormBuilder from "@/features/FormBuilder/FormBuilder";
import { closeModal } from "@/lib/modal/modalSlice";
import { IFormData } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import addNewAddressSchema from "./addNewAddressSchema";

const formData: IFormData[] = [
  {
    id: 5,
    label: "Label",
    name: "label",
    placeholder: "Enter a label for the delivery address (eg:Home, Office)",
  },
  {
    id: 4,
    label: "Name",
    name: "name",
    placeholder: "Enter the name of receiver",
  },
  {
    id: 6,
    label: "Mobile Number",
    name: "number",
    placeholder: "Enter the number of receiver",
  },
  {
    id: 0,
    label: "Province",
    type: "dropdown",
    name: "province",
    placeholder: "Select a Province",
    dropdownData: [{ label: "1", value: "1" }],
  },
  {
    id: 1,
    label: "City",
    name: "city",
    placeholder: "Enter the name of your city",
  },
  {
    id: 2,
    label: "Area",
    name: "area",
    placeholder: "Enter the name of your area",
  },
  {
    id: 3,
    placeholder: "Enter your nearest landmark",
    name: "landmark",
    label: "Nearest Landmark",
  },
];

const defaultValues = {
  number: "",
  province: "",
  city: "",
  area: "",
  landmark: "",
  label: "",
  name: "",
};

const AddNewAddress = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<any>({
    defaultValues: defaultValues,
    resolver: yupResolver(addNewAddressSchema),
  });

  const mutation = useAddDeliveryAddress();
  const onSubmit: SubmitHandler<any> = (data) => {
    mutation.mutate(data, {
      onSuccess: (data) => {
        reset();
        toast.success(data.message);
        dispatch(closeModal());
      },
      onError: (error) => {
        ErrorHandler(error);
      },
    });
  };
  return (
    <div>
      <h1 className="mb-4 font-semibold">Add a new delivery address</h1>
      <FormBuilder
        cols={2}
        {...{ errors, handleSubmit, formData, onSubmit, register, control }}
      />
    </div>
  );
};

export default AddNewAddress;
