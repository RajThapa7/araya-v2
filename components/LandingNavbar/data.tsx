import { FaStore } from "react-icons/fa";
import { MdHome } from "react-icons/md";

const navLinks = [
  {
    id: 0,
    title: "Home",
    link: "/",
  },
  {
    id: 1,
    title: "Shop",
    link: "/store",
  },
  {
    id: 2,
    title: "About us",
    link: "/",
  },
  {
    id: 3,
    title: "Blog",
    link: "/",
  },
  {
    id: 4,
    title: "FAQ",
    link: "/",
  },
  {
    id: 5,
    title: "Portfolio",
    link: "/",
  },
];

const navItems = [
  {
    id: 0,
    title: "Home",
    icon: <MdHome className="text-2xl lg:text-xl" />,
    link: "#",
  },
  {
    id: 1,
    title: "Shop",
    icon: <FaStore className="text-xl lg:text-base" />,
    link: "/store",
  },
];

export { navItems, navLinks };
