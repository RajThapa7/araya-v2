import { useAuth } from "@/Providers/AuthProvider";
import useAddReviewOnProduct from "@/api/hooks/review/useAddReviewOnProduct";
import FormBuilder from "@/features/FormBuilder/FormBuilder";
import addReviewSchema from "@/features/review/add/schema";
import { IFormData } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useParams } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import ErrorHandler from "../ErrorHandler/ErrorHandler";

const defaultValues: any = {
  rating: null,
  review: "",
  image: null,
};

const formData: IFormData[] = [
  {
    id: 0,
    label: "Rating",
    name: "rating",
    type: "rating",
    placeholder: "Enter the rating for the product",
  },
  {
    id: 1,
    label: "Review",
    name: "review",
    placeholder: "Enter the review for the product",
  },
  {
    id: 2,
    label: "Product Image",
    name: "image",
    placeholder: "select image",
    type: "image",
  },
];

export default function ReviewForm() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<any>({
    defaultValues: defaultValues,
    resolver: yupResolver(addReviewSchema),
  });

  const { user } = useAuth();

  const params = useParams();

  const mutation = useAddReviewOnProduct(
    params.productId as string,
    user._id || ""
  );

  const onSubmit: SubmitHandler<any> = (data) => {
    mutation.mutate(
      {
        ...data,
        userId: user._id,
        productId: params.productId,
      },
      {
        onSuccess: (data) => {
          toast.success(data.message);
        },
        onError: (error) => {
          ErrorHandler(error);
          console.log(error, "error ");
        },
        onSettled: () => reset(),
      }
    );
  };

  return (
    <div className="flex flex-col gap-8 flex-1 max-w-lg">
      <p className="text-gray-900 font-semibold text-lg">Add a Review</p>
      <FormBuilder
        buttonLabel="Add Review"
        {...{ errors, formData, handleSubmit, onSubmit, register, control }}
      />
    </div>
  );
}
