"use client";
import MyButton from "@/components/MyButton";
import MyInput from "@/components/MyInput/MyInput";
import Link from "next/link";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function Signup() {
  const [isPassword, setIsPassword] = useState(true);
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between md:items-center mb-4 gap-2">
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
      <div className="flex flex-col md:flex-row gap-12 bg-white px-8 py-8">
        <div className="flex md:w-1/2 flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Phone Number or Email*</label>
            <MyInput placeholder="Mobile number or email" />
          </div>
          <div className="relative flex flex-col gap-2">
            <label htmlFor="email">Password*</label>
            <MyInput
              placeholder="Password"
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
        <div className="md:w-1/2">
          <MyButton className="w-full !py-4">SignUp</MyButton>
          <p className="mb-3 mt-6">Or, Register with</p>
          <div className="flex flex-row items-center gap-6">
            <FcGoogle className="text-4xl" />
            <FaFacebook className="text-4xl text-blue-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
