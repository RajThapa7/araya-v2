"use client";
import { useAuth } from "@/Providers/AuthProvider";
import useFetchReviewsOnProduct from "@/api/hooks/review/useFetchReviewsOnProduct";
import OverallRating from "@/components/OverallRating/OverallRating";
import { Pagination } from "@/components/Pagination/Pagination";
import ReviewForm from "@/components/ReviewForm/ReviewForm";
import ReviewItem from "@/components/ReviewItem/ReviewItem";
import NoData from "@/public/no-data";
import { useRouter } from "next-nprogress-bar";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function ReviewSection() {
  const { user } = useAuth();
  const params = useParams();

  const { data, isLoading } = useFetchReviewsOnProduct(
    params.productId as string,
    user?._id || ""
  );

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

  return (
    <div className="flex flex-col gap-16 bg-primary p-10 rounded-md">
      <div className="flex flex-col justify-between gap-12 gap-x-8 lg:flex-row">
        <OverallRating
          averageRating={data?.average_rating || 0}
          reviewArray={data?.ratingCount || []}
          reviewCount={data?.totalCount || 0}
        />
        <ReviewForm />
      </div>

      <div className="">
        {data?.data.map((item) => (
          <ReviewItem
            img={item.img}
            key={item._id}
            date={item.createdAt}
            rating={item.rating}
            review={item.review}
            username={item.user_id.username}
          />
        ))}
        {data?.data.length === 0 && (
          <div className="flex mt-6 flex-col items-center justify-center">
            <NoData width={170} />
            <p className="font-semibold text-xl text-body text-center my-6">
              No reviews on the product
            </p>
          </div>
        )}
        {data?.data.length !== 0 && (
          <Pagination
            {...{ handleCountChange, handlePageClick }}
            totalPageCount={data?.totalPages || 0}
          />
        )}
      </div>
    </div>
  );
}
