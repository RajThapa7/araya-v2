"use client";
import { useAuth } from "@/Providers/AuthProvider";
import MyButton from "@/components/MyButton";
import { useRouter } from "next-nprogress-bar";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { PropsWithChildren, useState } from "react";

const data = [
  {
    id: 0,
    name: "Products",
    route: "product",
    link: "/admin/product",
  },
  {
    id: 1,
    name: "Categories",
    route: "category",
    link: "/admin/category",
  },
  {
    id: 2,
    name: "Users",
    route: "user",
    link: "/admin/user",
  },
  {
    id: 3,
    name: "Carousel",
    route: "carousel",
    link: "/admin/carousel",
  },
];

const Layout = ({ children }: PropsWithChildren) => {
  const { logout } = useAuth();
  const currentRoute = usePathname();
  const routeArray = currentRoute.split("/").slice(1);

  //set the active index based on the current route that matches the route property in the above data
  const [activeIndex, setActiveIndex] = useState<number>(
    data.findIndex(({ route }) => route === routeArray[1]),
  );
  const router = useRouter();
  return (
    <div className="">
      {/* sidebar */}
      <div className="absolute left-0 top-0 flex h-screen w-64 flex-col bg-gray-100 py-8">
        <Image
          alt="logo"
          width={100}
          height={100}
          className="mb-4 ml-6"
          src={require("@/public/footer-logo.svg")}
        />
        <div className="mt-4 flex flex-1 flex-col">
          {data.map(({ id, name, link }) => (
            <p
              key={id}
              onClick={() => {
                setActiveIndex(id);
                router.push(link);
              }}
              className={`transition-smooth cursor-pointer py-4 pl-6 hover:bg-accent hover:bg-opacity-20 hover:text-accent-dark ${
                activeIndex === id && "bg-accent bg-opacity-20 text-accent-dark"
              }`}
            >
              {name}
            </p>
          ))}
        </div>
        <MyButton
          className="mx-4 !py-4"
          onClick={() => {
            logout("/admin/login", "Logged out successfully", true);
          }}
        >
          Logout
        </MyButton>
      </div>

      {/* children */}
      <div className="ml-64 h-screen flex-1 overflow-y-scroll p-10">
        {children}
      </div>
    </div>
  );
};

export default Layout;
