"use client";
import { useComponentVisible } from "@/hooks/useComponentVisible";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  HeartIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { Drawer, IconButton } from "@material-tailwind/react";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "public/footer-logo.svg";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import { BadgeIcon } from "../BadgeIcon";
import MyButton from "../MyButton";
import { NotificationsMenu } from "../NotificationMenu/NotificationMenu";
import { Sidebar } from "../Sidebar/Sidebar";
import { MyTooltip } from "../Tooltip/Tooltip";

const data = {
  hello: "world",
  hello1: "world",
  hello2: "world",
  hello3: "world",
};

const DemoTab = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const { isComponentVisible, ref, setIsComponentVisible } =
    useComponentVisible(false, inputRef);

  useEffect(() => {
    if (searchTerm !== "") {
      setIsComponentVisible(true);
    } else {
      setIsComponentVisible(false);
    }
  }, [searchTerm, setIsComponentVisible]);

  return (
    <div className="relative hidden flex-1 flex-col px-4 lg:flex">
      <input
        type={"text"}
        ref={inputRef}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => setIsComponentVisible(true)}
        value={searchTerm}
        placeholder="search karnali"
        className="w-full rounded-lg border-none px-8 py-2 text-gray-800 outline-none ring-1 ring-gray-300 focus:ring-accent"
      />
      <button className="transition-smooth absolute right-4 h-10 max-h-fit rounded-r-lg bg-accent px-3 hover:bg-accent-dark">
        <MagnifyingGlassIcon width={20} color="white" strokeWidth={20} />
      </button>
      {isComponentVisible && (
        <div
          className="absolute left-3 top-[44px] z-[999] w-[calc(100%-24px)] rounded-md bg-white px-4 py-4 shadow-xl"
          ref={ref}
        >
          <table className="w-full border-collapse">
            <tbody className="">
              {Object.entries(data).map(([key, value]) => (
                <tr
                  key={key}
                  className="cursor-pointer border-b-2 border-gray-300 text-sm text-gray-900 last:border-none hover:bg-gray-200"
                >
                  <td className="w-full break-words px-5 pb-2 pt-3 font-semibold">
                    {key}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export const SearchTab = ({
  isOpen,
  setIsOpen,
  searchTabRef,
}: {
  isOpen: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  searchTabRef: any;
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    isOpen && inputRef.current?.focus();
  }, [inputRef, isOpen]);

  useEffect(() => {
    !isOpen && setSearchTerm("");
  }, [isOpen]);

  return (
    <motion.div
      ref={searchTabRef}
      transition={{ ease: "linear" }}
      animate={isOpen ? { y: 0 } : { y: -200 }}
      className={`absolute left-0 right-0 z-50 w-full bg-gray-200 shadow-lg lg:hidden`}
    >
      <div className="relative flex flex-1 flex-col px-4 py-4">
        <input
          ref={inputRef}
          type={"text"}
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          placeholder="search karnali"
          className="w-full rounded-lg border-none px-8 py-2 text-gray-800 outline-none ring-1 ring-gray-300 focus:ring-orange-500"
        />
        <button className="transition-smooth absolute right-4 h-10 max-h-fit rounded-r-lg bg-orange-400 px-3 hover:bg-orange-500">
          <MagnifyingGlassIcon width={20} color="white" strokeWidth={20} />
        </button>
        {searchTerm && (
          <div className="absolute left-3 top-[59px] w-[calc(100%-24px)] rounded-md bg-white px-4 py-4 shadow-xl">
            <table className="w-full border-collapse">
              <tbody className="">
                {Object.entries(data).map(([key, value]) => (
                  <tr
                    key={key}
                    className="cursor-pointer border-b-2 border-gray-300 text-sm text-gray-900 last:border-none hover:bg-gray-200"
                  >
                    <td className="w-full break-words px-5 pb-2 pt-3 font-semibold">
                      {key}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default function SearchBar() {
  const [open, setOpen] = useState(false);
  const closeDrawer = () => setOpen(false);
  const [searchTerm, setSearchTerm] = useState("");

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
        <div className="flex flex-row">
          <IconButton
            variant="text"
            color="white"
            className="lg:hidden"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
          <Image src={logo} alt="logo" width={100} />
        </div>

        <DemoTab />

        {/* buttons  */}
        <div className="flex justify-end">
          {/* <ProfileMenu /> */}
          <MyButton
            onClick={() => setIsComponentVisible((prev) => !prev)}
            className="text-white lg:!hidden"
            variant="text"
          >
            <MyTooltip content="Search">
              {isComponentVisible ? (
                <RiCloseFill size={24} />
              ) : (
                <MagnifyingGlassIcon width={20} />
              )}
            </MyTooltip>
          </MyButton>

          <MyButton className="text-gray-500" variant="text">
            {/* <MyTooltip content="Profile"> */}
            <UserIcon width={20} />
            {/* </MyTooltip> */}
          </MyButton>

          <MyButton className="!hidden text-white lg:!flex" variant="text">
            <NotificationsMenu />
          </MyButton>

          <MyButton className="!hidden text-white lg:!flex" variant="text">
            <MyTooltip content="Wishlist">
              <HeartIcon width={20} />
            </MyTooltip>
          </MyButton>

          <MyButton className="group text-white" variant="text">
            <MyTooltip content="My Cart">
              <BadgeIcon />
            </MyTooltip>
          </MyButton>
        </div>

        <Drawer open={open} onClose={closeDrawer} overlay={false}>
          <Sidebar {...{ closeDrawer }} />
        </Drawer>
      </div>
      {/* search tab for smaller devices */}
      <SearchTab isOpen={isComponentVisible} searchTabRef={ref} />
    </div>
  );
}
