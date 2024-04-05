"use client";
import MyButton from "@/components/MyButton";
import MyInput from "@/components/MyInput/MyInput";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const AdminLogin = () => {
  const [isPassword, setIsPassword] = useState(true);
  return (
    <div className="flex flex-col items-center justify-center h-screen relative">
      <form action="" className="flex flex-col p-10 gap-4 rounded-md border-2">
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
          <MyInput id="username" placeholder="Enter username or email" />
        </div>
        <div className="flex flex-col gap-2 relative">
          <label htmlFor="username">Password</label>
          <MyInput
            id="username"
            placeholder="Enter password"
            type={isPassword ? "password" : "text"}
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
        <MyButton className="!py-4">Login</MyButton>
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
