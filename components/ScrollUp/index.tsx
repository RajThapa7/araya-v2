"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import ScrollToTop from "react-scroll-to-top";

export default function ScrollUp() {
  //get the scroll direction
  const [direction, setDirection] = useState("up");

  let oldScrollY = useRef(0);
  const controlDirection = useCallback(() => {
    if (window.scrollY > oldScrollY.current) {
      setDirection("down");
    } else {
      setDirection("up");
    }
    oldScrollY.current = window.scrollY;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", controlDirection);
    return () => {
      window.removeEventListener("scroll", controlDirection);
    };
  }, [controlDirection]);

  return (
    <ScrollToTop
      smooth
      component={
        <div
          className={`${
            direction === "up" ? "flex" : "hidden"
          } items-center justify-center transition-smooth hover:bg-opacity-40 bg-accent bg-opacity-60 rounded-lg p-2`}
        >
          <IoIosArrowUp size={20} color="white" />
        </div>
      }
    />
  );
}
