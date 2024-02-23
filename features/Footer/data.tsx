import { FaFacebook, FaPinterest, FaTiktok } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const footerLinks = [
  {
    id: 0,
    title: "About Us",
    links: [
      { id: 0, title: "Company History", link: "#" },
      {
        id: 1,
        title: "Meet the Team",
        link: "#",
      },
    ],
  },
  {
    id: 1,
    title: "Our Products",
    links: [
      { id: 0, title: "Company History", link: "#" },
      {
        id: 1,
        title: "Meet the Team",
        link: "#",
      },
    ],
  },
  {
    id: 2,
    title: "Helpful Links",
    links: [
      { id: 0, title: "Company History", link: "#" },
      {
        id: 1,
        title: "Meet the Team",
        link: "#",
      },
    ],
  },
];

const socialMediaData = [
  {
    id: 0,
    link: "https://www.facebook.com/profile.php?id=61555621268121",
    icon: <FaFacebook size={26} />,
  },
  {
    id: 1,
    link: "https://www.instagram.com/arayaarts/",
    icon: <RiInstagramFill size={30} />,
  },
  {
    id: 2,
    link: "#",
    icon: <FaPinterest size={26} />,
  },
  {
    id: 3,
    link: "https://www.tiktok.com/@arayaarts",
    icon: <FaTiktok size={26} />,
  },
];

export { footerLinks, socialMediaData };
