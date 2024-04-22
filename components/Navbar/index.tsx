"use client";
import useFetchCategories from "@/api/hooks/categories/useFetchCategories";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export function MyNavbar() {
  const [isNavbarVisible, setIsNavbarVisible] = useState<boolean>(true);

  const { data } = useFetchCategories();

  useEffect(() => {
    let previousScrollPosition = 0;
    let currentScrollPosition = 0;

    window.addEventListener("scroll", function (e) {
      // Get the new Value
      currentScrollPosition = window.pageYOffset;

      //Subtract the two and conclude
      if (previousScrollPosition - currentScrollPosition < -10) {
        setIsNavbarVisible(false);
      } else if (previousScrollPosition - currentScrollPosition > 0) {
        setIsNavbarVisible(true);
      }

      // Update the previous value
      previousScrollPosition = currentScrollPosition;
    });
  }, []);

  return (
    <motion.nav
      className={`transition-smooth fixed px-6 py-4 w-full hidden lg:flex bg-primary z-[80] text-body shadow-md`}
      animate={{
        y: isNavbarVisible ? 72 : -80,
        transition: {
          duration: 0.1,
          type: "just",
        },
      }}
    >
      <div className="flex flex-row gap-6">
        {data?.map((item) => (
          <Link
            href={`/store/${item.slug}`}
            key={item._id}
            className="transition-smooth hover:text-accent"
          >
            {item.categoryName}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}
