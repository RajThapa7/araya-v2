"use client";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { useSearchParams } from "next/navigation";
import ReactPaginate from "react-paginate";

export function Pagination({
  handlePageClick,
  handleCountChange,
  totalPageCount,
}: {
  handlePageClick: (e: any) => void;
  handleCountChange: (e: any) => void;
  totalPageCount: number;
}) {
  const searchParams = useSearchParams();

  const limit = searchParams.get("limit") as string;
  const page = searchParams.get("page") as string;

  return (
    <div className="flex flex-row gap-10 items-center justify-center">
      <ReactPaginate
        breakLabel="..."
        nextLabel={<ArrowRightIcon strokeWidth={2} className="h-4 w-4 ml-4" />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={totalPageCount}
        previousLabel={
          <ArrowLeftIcon strokeWidth={2} className="h-4 w-4 mr-4" />
        }
        renderOnZeroPageCount={null}
        className="flex flex-row w-fit items-center"
        pageClassName=" font-semibold text-body"
        pageLinkClassName="!py-2 !px-4 hover:bg-gray-200"
        activeLinkClassName="bg-accent text-primary"
        activeClassName="bg-accent"
        initialPage={parseInt(page) - 1 || 0}
        forcePage={parseInt(page) - 1}
      />
      {/* result per page selector */}
      <div className="flex flex-row items-center gap-2">
        <p className="text-sm font-semibold text-body">Result Per Page</p>
        <select
          name="resultPerPage"
          id=""
          defaultValue={parseInt(limit)}
          className="p-2 rounded-md text-body"
          onChange={handleCountChange}
        >
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </select>
      </div>
    </div>
  );
}
