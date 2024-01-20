import Image from "next/image";
import { FaFacebook, FaPhoneAlt, FaPinterest, FaTiktok } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
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

export const socialMediaData = [
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

export default function Footer() {
  return (
    <footer className="green-background">
      <div className="mx-auto max-w-screen-xl px-6">
        <div className="lg:grid lg:grid-cols-2">
          <div className="border-b py-8 lg:order-last lg:border-b-0 lg:py-16 lg:ps-16">
            <div className="relative w-32 aspect-video lg:hidden">
              <Image
                src={"/footer-logo.svg"}
                alt="logo"
                fill
                className="object-contain"
              />
            </div>

            <div className="mt-4 space-y-4 lg:mt-0">
              <span className="hidden h-1 lg:mb-2 w-10 rounded bg-accent lg:block"></span>

              <div>
                <h2 className="text-2xl font-medium text-primary">
                  Signup to our Newsletter
                </h2>

                <p className="mt-4 max-w-lg text-primary">
                  Signup to our newsletter to get the latest news and offers
                  regarding the notes and all the stuff we make
                </p>
              </div>

              <form className="mt-6 w-full">
                <div className="rounded-md border border-primary-dark p-2 focus-within:ring sm:flex sm:items-center sm:gap-4">
                  <input
                    type="email"
                    id="UserEmail"
                    placeholder="Enter your email address"
                    className="w-full border-none ring-0 outline-none sm:text-sm text-primary py-2 sm:py-0 bg-transparent"
                  />

                  <button className="mt-1 w-full rounded bg-accent px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-smooth hover:bg-accent-dark sm:mt-0 sm:w-auto sm:shrink-0">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="py-8 lg:py-16 lg:pe-16">
            <div className="hidden text-accent relative w-32 aspect-video lg:block">
              <Image
                src={"/footer-logo.svg"}
                alt="logo"
                fill
                className="object-contain"
              />
            </div>

            <div className="mt-8 lg:mt-4 grid grid-cols-2 gap-8 sm:grid-cols-3">
              {footerLinks.map(({ id, links, title }) => (
                <div className="text-center sm:text-left" key={id}>
                  <p className="font-medium text-primary">{title}</p>

                  <ul className="mt-6 space-y-4 text-sm">
                    {links.map(({ id, link, title }) => (
                      <li key={id}>
                        <a
                          className="text-primary transition hover:text-primary/75"
                          href={link}
                        >
                          {title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-primary-dark pt-8 text-primary">
              <div className="flex flex-col gap-6 mb-6 sm:mb-10 sm:flex-row items-center">
                <div className="flex flex-row gap-6 items-center">
                  {socialMediaData.map(({ icon, link, id }) => (
                    <a
                      key={id}
                      href={link}
                      target="_blank"
                      className="transition-smooth hover:opacity-70"
                    >
                      {icon}
                    </a>
                  ))}
                </div>
                <div className="flex  flex-col sm:flex-row gap-4 items-center sm:items-start">
                  <div className="inline-flex gap-3 items-center">
                    <IoIosMail size={22} className="text-accent" />
                    <a
                      href="mailto:jyangoraj@gmail.com"
                      target="_blank"
                      className="text-primary font-medium text-sm"
                    >
                      arayaarts2024@gmail.com
                    </a>
                  </div>
                  <div className="inline-flex gap-3 items-center">
                    <FaPhoneAlt size={20} className="text-accent" />
                    <p className="text-primary font-medium text-sm">
                      +977 9848741130
                    </p>
                  </div>
                </div>
              </div>
              <ul className="flex flex-wrap gap-4 text-xs">
                <li>
                  <a href="#" className=" transition hover:opacity-75">
                    {" "}
                    Terms & Conditions{" "}
                  </a>
                </li>

                <li>
                  <a href="#" className=" transition hover:opacity-75">
                    {" "}
                    Privacy Policy{" "}
                  </a>
                </li>

                <li>
                  <a href="#" className=" transition hover:opacity-75">
                    {" "}
                    Cookies{" "}
                  </a>
                </li>
              </ul>

              <p className="mt-6 text-xs text-primary">
                &copy; 2024. Araya Arts . All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
