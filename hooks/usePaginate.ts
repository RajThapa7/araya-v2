import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

const usePaginate = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handlePageClick = (e: any) => {
    const activePageNumber = e.selected + 1;
    router.push(pathname + "?" + createQueryString("page", activePageNumber));
  };

  const handleCountChange = (e: any) => {
    const resultPerPage = e.target.value;
    router.push(pathname + "?" + createQueryString("limit", resultPerPage));
  };

  return { handleCountChange, handlePageClick };
};

export default usePaginate;
