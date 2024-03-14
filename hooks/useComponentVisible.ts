import { RefObject, useCallback, useEffect, useRef, useState } from "react";

export const useComponentVisible = (
  initialIsVisible: boolean,
  excludeRef?: RefObject<HTMLDivElement>,
) => {
  const [isComponentVisible, setIsComponentVisible] =
    useState(initialIsVisible);

  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        if (typeof excludeRef === "undefined") {
          setIsComponentVisible(false);
          return;
        }
        if (
          typeof excludeRef !== "undefined" &&
          excludeRef.current &&
          !excludeRef.current.contains(event.target)
        ) {
          setIsComponentVisible(false);
        }
      }
    },
    [excludeRef],
  );

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [handleClickOutside]);

  return { ref, isComponentVisible, setIsComponentVisible };
};
