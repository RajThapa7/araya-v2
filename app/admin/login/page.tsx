"use client";
import { useAuth } from "@/Providers/AuthProvider";
import useAdminLogin from "@/api/hooks/admin/useAdminLogin";
import MyButton from "@/components/MyButton";
import MyInput from "@/components/MyInput/MyInput";
import adminLoginSchema from "@/features/admin/login/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { AxiosError } from "axios";
import { useRouter } from "next-nprogress-bar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { toast } from "react-toastify";

const defaultValue = {
  username: "",
  password: "",
};

const AdminLogin = () => {
  const [isPassword, setIsPassword] = useState(true);
  const { login } = useAuth();

  const mutation = useAdminLogin();
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValue,
    resolver: yupResolver(adminLoginSchema),
  });

  const onSubmit = (data: any) => {
    mutation.mutate(data, {
      onSuccess: (res) => {
        login(res.user, res.token, "/admin/product", true);
      },
      onError: (error) => {
        if (error instanceof AxiosError) {
          toast.error(error?.response?.data?.message);
        }
      },
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen relative">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col p-10 gap-4 rounded-md border-2"
      >
        <Image
          alt="logo"
          src={require("@/public/footer-logo.svg")}
          width={100}
          height={100}
          className="mb-2 self-center"
        />
        <p className="font-semibold text-2xl text-body">Admin Login</p>
        <div className="flex flex-col gap-2">
          <label htmlFor="username">Username or Email</label>
          <MyInput
            id="username"
            placeholder="Enter username or email"
            {...register("username")}
            error={errors.username}
          />
        </div>
        <div className="flex flex-col gap-2 relative">
          <label htmlFor="username">Password</label>
          <MyInput
            id="username"
            placeholder="Enter password"
            {...register("password")}
            type={isPassword ? "password" : "text"}
            error={errors.password}
          />

          {isPassword ? (
            <AiFillEyeInvisible
              className="absolute top-11 end-3 text-2xl text-gray-500"
              onClick={() => setIsPassword(false)}
            />
          ) : (
            <AiFillEye
              className="absolute top-11 end-3 text-2xl text-gray-500"
              onClick={() => setIsPassword(true)}
            />
          )}
        </div>
        <MyButton className="!py-4" type="submit">
          Login
        </MyButton>
        <Link
          href={"/store"}
          className="underline text-sm mt-2 transition hover:text-accent"
        >
          Go back home
        </Link>
      </form>
    </div>
  );
};

export default AdminLogin;
