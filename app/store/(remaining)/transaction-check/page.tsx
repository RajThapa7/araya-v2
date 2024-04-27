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
          <h2 className="text-center font-bold text-2xl mb-4">
            Transaction Details
          </h2>
          <div className="flex flex-col max-w-md mx-auto bg-primary p-8 gap-2 rounded-md">
            {isValid && (
              <FaRegCheckCircle className="text-accent text-6xl self-center mb-6" />
            )}
            <div className="gap-4 flex flex-row justify-between">
              <p className="">Status</p>
              <p className="font-semibold">{data?.status}</p>
            </div>
            <div className="gap-4 flex flex-row justify-between">
              <p className="">Transaction Id</p>
              <p className="font-semibold break-all">{data?.transaction_id}</p>
            </div>
            <div className="flex gap-4 flex-row justify-between">
              <p className="">Purchase Order Id</p>
              <p className="font-semibold">{purchaseId}</p>
            </div>
            <div className="flex flex-row gap-4 justify-between">
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
