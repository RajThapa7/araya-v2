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
];

const Layout = ({ children }: PropsWithChildren) => {
  const { logout } = useAuth();
  const currentRoute = usePathname();
  const routeArray = currentRoute.split("/").slice(1);

  //set the active index based on the current route that matches the route property in the above data
  const [activeIndex, setActiveIndex] = useState<number>(
    data.findIndex(({ route }) => route === routeArray[1])
  );
  const router = useRouter();
  return (
    <div className="">
      {/* sidebar */}
      <div className="bg-gray-100 h-screen w-64 py-8 flex flex-col absolute top-0 left-0">
        <Image
          alt="logo"
          width={100}
          height={100}
          className="ml-6 mb-4"
          src={require("@/public/footer-logo.svg")}
        />
        <div className="flex flex-col mt-4 flex-1">
          {data.map(({ id, name, link }) => (
            <p
              key={id}
              onClick={() => {
                setActiveIndex(id);
                router.push(link);
              }}
              className={`py-4 cursor-pointer transition-smooth hover:bg-accent hover:bg-opacity-20 hover:text-accent-dark pl-6 ${
                activeIndex === id && "bg-accent bg-opacity-20 text-accent-dark"
              }`}
            >
              {name}
            </p>
          ))}
        </div>
        <MyButton
          className="!py-4 mx-4"
          onClick={() => {
            logout("/admin/login", "Logged out successfully");
          }}
        >
          Logout
        </MyButton>
      </div>

      {/* children */}
      <div className="h-screen overflow-y-scroll flex-1 ml-64 p-10">
        {children}
      </div>
    </div>
  );
};

export default Layout;
