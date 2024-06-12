import { useAuth } from "@/Providers/AuthProvider";
import useAddReviewOnProduct from "@/api/hooks/review/useAddReviewOnProduct";
import routes from "@/config/routes";
import FormBuilder from "@/features/FormBuilder/FormBuilder";
import addReviewSchema from "@/features/review/add/schema";
import { IFormData } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next-nprogress-bar";
import { useParams } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import ErrorHandler from "../ErrorHandler/ErrorHandler";
import MyButton from "../MyButton";

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

  const { user, token } = useAuth();
  const isLoggedIn = !!token;

  const params = useParams();

  const mutation = useAddReviewOnProduct(
    params.productId as string,
    user?._id || "",
  );

  const router = useRouter();

  const onSubmit: SubmitHandler<any> = (data) => {
    if (!isLoggedIn) {
      toast.warn("Please login to add review");
      reset();
      return;
    }
    mutation.mutate(
      {
        ...data,
        userId: user?._id,
        productId: params.productId,
      },
      {
        onSuccess: (data) => {
          toast.success(data.message);
          reset();
        },
        onError: (error) => {
          ErrorHandler(error);
          reset();
        },
      },
    );
  };

  if (!isLoggedIn) {
    return (
      <div className="flex max-w-lg flex-1 flex-col items-center justify-center gap-6">
        <p className="text-center text-lg font-semibold text-body">
          Login to add review on product
        </p>
        <MyButton
          className="!px-8 !py-4"
          onClick={() => router.push(routes.loginRoute)}
        >
          Login
        </MyButton>
      </div>
    );
  }

  return (
    <div className="flex max-w-lg flex-1 flex-col gap-8">
      <p className="text-lg font-semibold text-gray-900">Add a Review</p>
      <FormBuilder
        buttonLabel="Add Review"
        isLoading={mutation.isPending}
        {...{ errors, formData, handleSubmit, onSubmit, register, control }}
      />
    </div>
  );
}
