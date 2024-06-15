"use client";
import useRegisterUser from "@/api/hooks/auth/useRegisterUser";
import ErrorHandler from "@/components/ErrorHandler/ErrorHandler";
import MyButton from "@/components/MyButton";
import MyInput from "@/components/MyInput/MyInput";
import registerSchema from "@/features/store/register/schema/schema";
import getApiRoute from "@/helper/getApiRoute";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next-nprogress-bar";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const defaultValue = {
  username: "",
  password: "",
  email: "",
};

export default function Signup() {
  const router = useRouter();
  const [isPassword, setIsPassword] = useState(true);

  const mutation = useRegisterUser();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValue,
    resolver: yupResolver(registerSchema),
  });

  const onsubmit = (data: any) => {
    mutation.mutate(data, {
      onSuccess: () => {
        toast.success("User Created Successfully");
        router.push("/store/login");
      },
      onError: (error) => {
        ErrorHandler(error);
      },
    });
  };

  return (
    <div>
      <div className="mb-4 flex flex-col justify-between gap-2 md:flex-row md:items-center">
        <p className="text-xl font-medium text-gray-800">
          Welcome to Araya Arts! Please Register here
        </p>
        <p className="text-sm text-gray-800">
          Already have an account?&nbsp;
          <Link
            href={"/store/login"}
            className="transition-smooth text-blue-800 hover:text-blue-900"
          >
            Click
          </Link>
          &nbsp;here
        </p>
      </div>
      {/* form section */}
      <form onSubmit={handleSubmit(onsubmit)}>
        <div className="flex flex-col gap-12 bg-white px-8 py-8 md:flex-row md:items-center">
          <div className="flex flex-col gap-4 md:w-1/2">
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email*</label>
              <MyInput
                placeholder="Email"
                {...register("email")}
                error={errors.email}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Username</label>
              <MyInput
                placeholder="Mobile number or email"
                {...register("username")}
                error={errors.username}
              />
            </div>
            <div className="relative flex flex-col gap-2">
              <label htmlFor="email">Password*</label>
              <MyInput
                placeholder="Password"
                type={isPassword ? "password" : "text"}
                {...register("password")}
                error={errors.password}
              />
              {isPassword ? (
                <AiFillEyeInvisible
                  className="absolute bottom-3 end-3 text-2xl text-gray-500"
                  onClick={() => setIsPassword(false)}
                />
              ) : (
                <AiFillEye
                  className="absolute bottom-3 end-3 text-2xl text-gray-500"
                  onClick={() => setIsPassword(true)}
                />
              )}
            </div>
          </div>
          <div className="md:w-1/2">
            <MyButton
              type="submit"
              isLoading={mutation.isPending}
              className="w-full !py-4"
            >
              SignUp
            </MyButton>
            <p className="mb-3 mt-6">Or, Register with</p>
            <div className="flex flex-row items-center gap-6">
              <FcGoogle
                className="text-4xl"
                onClick={() =>
                  router.push(
                    process.env.NEXT_PUBLIC_BASE_URL +
                      getApiRoute("googleLogin")(),
                  )
                }
              />
              <FaFacebook
                onClick={() =>
                  router.push(
                    process.env.NEXT_PUBLIC_BASE_URL +
                      getApiRoute("facebookLogin")(),
                  )
                }
                className="text-4xl text-blue-500"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
