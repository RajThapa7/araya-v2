"use client";
import { useAuth } from "@/Providers/AuthProvider";
import useCheckForAuthSuccess from "@/api/hooks/useCheckForAuthSuccess";
import useLogin from "@/api/hooks/useLogin";
import MyButton from "@/components/MyButton";
import MyInput from "@/components/MyInput/MyInput";
import loginSchema from "@/features/store/login/schema/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { AxiosError } from "axios";
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
};

export default function Login() {
  const router = useRouter();
  const [isPassword, setIsPassword] = useState(true);
  const { login } = useAuth();

  const mutation = useLogin();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValue,
    resolver: yupResolver(loginSchema),
  });

  const { data, refetch } = useCheckForAuthSuccess();

  const onSubmit = (data: any) => {
    mutation.mutate(data, {
      onSuccess: () => {
        refetch().then((res) => {
          login(res.data.user, res.data.token, "/store");
        });
      },
      onError: (error) => {
        if (error instanceof AxiosError) {
          toast.error(error?.response?.data?.message);
        }
      },
    });
  };
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between md:items-center mb-4 gap-2">
        <p className="text-xl font-medium text-gray-800">
          Welcome to Araya Arts! Please login
        </p>
        <p className="text-sm text-gray-800">
          New member?&nbsp;
          <Link
            href={"/store/signup"}
            className="transition-smooth text-blue-800 hover:text-blue-900"
          >
            Register
          </Link>
          &nbsp;here
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col md:flex-row gap-12 bg-white px-8 py-8"
      >
        <div className="flex md:w-1/2 flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Phone Number or Email*</label>
            <MyInput
              {...register("username")}
              error={errors.username}
              placeholder="Mobile number or email"
            />
          </div>
          <div className="relative flex flex-col gap-2">
            <label htmlFor="email">Password*</label>
            <MyInput
              placeholder="Password"
              {...register("password")}
              error={errors.password}
              type={isPassword ? "password" : "text"}
            />
            {isPassword ? (
              <AiFillEyeInvisible
                className="absolute end-3 top-11 text-2xl text-gray-500"
                onClick={() => setIsPassword(false)}
              />
            ) : (
              <AiFillEye
                className="absolute end-3 top-11 text-2xl text-gray-500"
                onClick={() => setIsPassword(true)}
              />
            )}
          </div>
        </div>
        <div className="md:w-1/2">
          <MyButton className="w-full !py-4" type="submit">
            Login
          </MyButton>
          <p className="mb-3 mt-6">Or, Login with</p>
          <div className="flex flex-row items-center gap-6">
            <FcGoogle
              className="text-4xl"
              onClick={() => router.push("http://localhost:4000/login/google")}
            />
            <FaFacebook className="text-4xl text-blue-500" />
          </div>
        </div>
      </form>
    </div>
  );
}
