"use client";
import useVerifyKhaltiPayment from "@/api/hooks/checkout/useVerifyKhaltiPayment";
import LoadingOverlay from "@/components/LoadingOverlay/LoadingOverlay";
import { useSearchParams } from "next/navigation";
import { FaRegCheckCircle } from "react-icons/fa";

const Page = () => {
  const searchParams = useSearchParams();

  const pidx = searchParams.get("pidx");
  const transactionId = searchParams.get("transaction_id");
  const purchaseId = searchParams.get("purchase_order_id");
  const amount = searchParams.get("total_amount");
  const mobile = searchParams.get("mobile");

  const { data, isLoading } = useVerifyKhaltiPayment();

  const isValid =
    transactionId === data?.transaction_id &&
    parseInt(amount || "") === data.total_amount;

  return (
    <>
      <LoadingOverlay isVisible={isLoading} />
      {!isLoading && (
        <>
          <h2 className="mb-4 text-center text-2xl font-bold">
            Transaction Details
          </h2>
          <div className="mx-auto flex max-w-md flex-col gap-2 rounded-md bg-primary p-8">
            {isValid && (
              <FaRegCheckCircle className="mb-6 self-center text-6xl text-accent" />
            )}
            <div className="flex flex-row justify-between gap-4">
              <p className="">Status</p>
              <p className="font-semibold">{data?.status}</p>
            </div>
            <div className="flex flex-row justify-between gap-4">
              <p className="">Transaction Id</p>
              <p className="break-all font-semibold">{data?.transaction_id}</p>
            </div>
            <div className="flex flex-row justify-between gap-4">
              <p className="">Purchase Order Id</p>
              <p className="font-semibold">{purchaseId}</p>
            </div>
            <div className="flex flex-row justify-between gap-4">
              <p className="">Mobile Number</p>
              <p className="font-semibold">{mobile}</p>
            </div>
            <div className="flex flex-row justify-between gap-4">
              <p className="">Total Amount</p>
              <p className="font-semibold">
                Rs. {(data?.total_amount || 0) / 100}
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Page;
