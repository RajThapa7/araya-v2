"use client";
import { useComponentVisible } from "@/hooks/useComponentVisible";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { HeartIcon, UserIcon } from "@heroicons/react/24/solid";
import { Drawer, IconButton } from "@material-tailwind/react";
import { useRouter } from "next-nprogress-bar";
import Image from "next/image";
import logo from "public/footer-logo.svg";
import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { RiCloseFill } from "react-icons/ri";
import { BadgeIcon } from "../../components/BadgeIcon";
import MyButton from "../../components/MyButton";
import { NotificationsMenu } from "../../components/NotificationMenu/NotificationMenu";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import LargeScreensSearchTab from "./LargeScreenSearchTab";
import { SmallScreenSearchTab } from "./SmallScreenSearchTab";

export default function SearchBar() {
  const [open, setOpen] = useState(false);
  const closeDrawer = () => setOpen(false);
  const router = useRouter();

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);
  return (
    <div>
      <div className="flex flex-row justify-between gap-x-12 bg-primary px-2 py-4 md:px-6 lg:justify-around">
        {/* mobile menu  */}
        <div className="flex flex-row gap-4">
          <IconButton
            variant="text"
            className="lg:hidden text-gray-500"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
          <Image
            src={logo}
            alt="logo"
            width={100}
            onClick={() => router.push("/store")}
          />
        </div>

        <LargeScreensSearchTab />

        {/* buttons  */}
        <div className="flex justify-end">
          {/* <ProfileMenu /> */}
          <button
            onClick={() => setIsComponentVisible((prev) => !prev)}
            className="text-gray-500 lg:!hidden mr-1"
          >
            {isComponentVisible ? (
              <RiCloseFill size={24} />
            ) : (
              <IoSearch className="text-xl" />
            )}
          </button>

          <MyButton className="text-gray-500 !bg-primary group" variant="text">
            <UserIcon
              width={20}
              className="group-hover:text-accent transition-smooth"
            />
          </MyButton>

          <MyButton
            className="!hidden text-gray-500 lg:!flex !bg-primary"
            variant="text"
          >
            <NotificationsMenu />
          </MyButton>

          <MyButton
            className=" text-gray-500 !bg-primary group"
            variant="text"
            onClick={() => router.push("/store/wishlist")}
          >
            <HeartIcon
              width={20}
              className="group-hover:text-accent transition-smooth"
            />
          </MyButton>

          <MyButton className="group text-white !bg-primary" variant="text">
            <BadgeIcon />
          </MyButton>
        </div>

        <Drawer open={open} onClose={closeDrawer} overlay={false}>
          <Sidebar {...{ closeDrawer }} />
        </Drawer>
      </div>
      {/* search tab for smaller devices */}
      <SmallScreenSearchTab
        isOpen={isComponentVisible}
        setIsOpen={setIsComponentVisible}
        searchTabRef={ref}
      />
    </div>
  );
}
