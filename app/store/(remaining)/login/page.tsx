"use client";
import MyButton from "@/components/Button/Button";
import MyInput from "@/components/MyInput/MyInput";
import Link from "next/link";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function Login() {
  const [isPassword, setIsPassword] = useState(false);
  return (
    <div>
      <div className="flex flex-row justify-between">
        <p className="text-xl font-medium text-gray-800">
          Welcome to RajPasal! Please login
        </p>
        <p className="text-sm text-gray-800">
          New member?&nbsp;
          <Link
            href={"/signup"}
            className="transition-smooth text-blue-800 hover:text-blue-900"
          >
            Register
          </Link>
          &nbsp;here
        </p>
      </div>
      <div className="flex flex-row gap-12 bg-white px-8 py-8">
        <div className="flex w-1/2 flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Phone Number or Email*</label>
            <MyInput placeholder="Please enter your phone number or email" />
          </div>
          <div className="relative flex flex-col gap-2">
            <label htmlFor="email">Password*</label>
            <MyInput
              placeholder="Please enter your password"
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
        </div>
        <div className="w-1/2">
          <MyButton className="w-full !py-4">Login</MyButton>
          <p>Or, login with</p>
        </div>
      </div>
    </div>
  );
}
