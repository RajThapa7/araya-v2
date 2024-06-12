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
import logo from "/public/footer-logo.svg";

export default function SearchBar() {
  const [open, setOpen] = useState(false);
  const closeDrawer = () => setOpen(false);
  const router = useRouter();

  const { logout, user, token } = useAuth();

  const isLogin = !!token;

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false),
    );
  }, []);

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);
  return (
    <div className="">
      <div className="fixed left-0 top-0 z-[100] flex w-screen flex-row justify-between gap-x-12 bg-primary px-2 py-4 shadow-sm md:px-6 lg:justify-around">
        {/* mobile menu  */}
        <div className="flex flex-row gap-4">
          <IconButton
            variant="text"
            className="text-gray-500 lg:hidden"
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
            className="mr-1 text-gray-500 lg:!hidden"
          >
            {isComponentVisible ? (
              <RiCloseFill size={24} />
            ) : (
              <IoSearch className="text-xl" />
            )}
          </button>

          {!isLogin ? (
            <MyButton
              className="group !min-w-fit !bg-primary text-gray-500"
              variant="text"
              onClick={() => router.push("/store/login")}
            >
              <UserIcon
                width={20}
                className="transition-smooth group-hover:text-accent"
              />
            </MyButton>
          ) : (
            <Menu>
              <MenuHandler>
                <Avatar
                  className="ml-4 mr-2 h-8 w-8"
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
            className="!hidden !min-w-fit !bg-primary text-gray-500 lg:!flex"
            variant="text"
          >
            <NotificationsMenu />
          </MyButton>

          <MyButton
            className="group !min-w-fit !bg-primary text-gray-500"
            variant="text"
            onClick={() => router.push("/store/wishlist")}
          >
            <HeartIcon
              width={20}
              className="transition-smooth group-hover:text-accent"
            />
          </MyButton>

          <MyButton
            className="group !min-w-fit !bg-primary text-white"
            variant="text"
          >
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
