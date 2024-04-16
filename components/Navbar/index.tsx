"use client";

import { montserrat } from "@/app/fonts";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import {
  Collapse,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  Navbar,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { navbarData } from "./navbarData";

interface INavListMenuProps {
  title: string;
  navListMenuData: {
    id: number;
    title: string;
    items: {
      id: number;
      title: string;
      link: string;
    }[];
  }[];
}

function NavListMenu({ title, navListMenuData }: INavListMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const renderItems = navListMenuData.map(({ title, items }, key) => (
    <div className="flex items-center gap-3 rounded-lg" key={key}>
      <div>
        <p className="text-md flex items-center font-bold text-body">{title}</p>
        <div className="mt-5 flex flex-col gap-4">
          {items.map(({ id, title, link }) => (
            <Link
              href={link}
              key={id}
              className="transition-smooth underline text-body/60 decoration-white hover:decoration-gray-600"
            >
              {title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  ));

  return (
    <div className="mt-16">
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <div>
            <ListItem
              className="flex items-center gap-2 py-2 pr-4"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              {title}
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </div>
        </MenuHandler>
        {/* menu items  */}
        <MenuList
          className={`hidden w-full items-start justify-between rounded-xl px-14 py-10 lg:flex lg:flex-row ${montserrat.className}`}
        >
          <div className="grid w-1/2 grid-cols-3 place-items-start justify-between justify-items-center gap-y-8 xl:grid-cols-4">
            {renderItems}
          </div>
          <div className="relative aspect-video h-full w-1/2">
            <Image
              alt="logo"
              src="https://itti.com.np/_next/image?url=https%3A%2F%2Fadmin.itti.com.np%2Fstorage%2Fproduct%2Fsafescan-2000-portable-banknote-counter-price-nepal%2Fthumb%2Fd3aad0ad-d087-4645-9086-227b90882c43.jpeg&w=384&q=75"
              fill
              quality={100}
              className="object-contain "
              sizes="(min-width: 480px) 384px, calc(92.5vw - 42px)"
            />
          </div>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </div>
  );
}

export function MyNavbar() {
  return (
    <Navbar className="hidden w-full max-w-[100%] !rounded-none px-4 py-2 lg:flex">
      <div className="flex items-center justify-between text-blue-gray-900">
        <div className="hidden flex-1 justify-start lg:flex">
          {navbarData.map((item) => (
            <NavListMenu
              title={item.title}
              key={item.id}
              navListMenuData={item.data}
            />
          ))}
        </div>
      </div>
    </Navbar>
  );
}
