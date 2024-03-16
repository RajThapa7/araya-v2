import { useEffect } from "react";

export default function useScrollToTop(dependency: (string | boolean)[] = []) {
  useEffect(() => {
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependency);
}
