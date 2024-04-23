"use client";
import { useAuth } from "@/Providers/AuthProvider";
import { useComponentVisible } from "@/hooks/useComponentVisible";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { HeartIcon, UserIcon } from "@heroicons/react/24/solid";
import {
  Avatar,
  Drawer,
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { useRouter } from "next-nprogress-bar";
import Image from "next/image";
import logo from "public/footer-logo.svg";
import { useEffect, useState } from "react";
import { IoIosLogOut } from "react-icons/io";
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

  const { logout, user, token } = useAuth();

  const isLogin = !!token;

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);
  return (
    <div className="">
      <div className="flex fixed top-0 left-0 bg-primary flex-row justify-between gap-x-12 z-[100] w-screen px-2 py-4 md:px-6 lg:justify-around shadow-sm">
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
        <div className="flex items-center justify-end">
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

          {!isLogin ? (
            <MyButton
              className="text-gray-500 !bg-primary group"
              variant="text"
              onClick={() => router.push("/store/login")}
            >
              <UserIcon
                width={20}
                className="group-hover:text-accent transition-smooth"
              />
            </MyButton>
          ) : (
            <Menu>
              <MenuHandler>
                <Avatar
                  className="mr-2 ml-4 w-8 h-8"
                  variant="circular"
                  alt="tania andrew"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                />
              </MenuHandler>
              <MenuList className="flex flex-col gap-2">
                <MenuItem
                  onClick={() => logout("/store", "logged out successfully")}
                  className="flex items-center gap-2 py-2"
                >
                  <IoIosLogOut size={22} color="red" />
                  Logout
                </MenuItem>
              </MenuList>
            </Menu>
          )}

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
