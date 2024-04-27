"use client";
import { useAuth } from "@/Providers/AuthProvider";
import useInititateKhaltiPayment from "@/api/hooks/checkout/useInititateKhaltiPayment";
import ErrorHandler from "@/components/ErrorHandler/ErrorHandler";
import MyButton from "@/components/MyButton";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

export default function Cart() {
  const reducedPrice = 100;
  const price = 200;
  const discountPercentage = 10;
  const router = useRouter();

  const mutation = useInititateKhaltiPayment();

  const searchParams = useSearchParams();
  const products = JSON.parse(
    decodeURIComponent(searchParams.get("products") as string)
  );

  const { user } = useAuth();

  const totalPrice = searchParams.get("totalPrice");
  console.log(products);

  const productBreakdown = products?.map((item: any) => ({
    identity: item._id,
    name: item.title,
    total_price: item.quantity * item.price * 100,
    quantity: item.quantity,
    unit_price: item.price * 100,
  }));
  const amountBreakdown = products?.map((item: any) => ({
    label: item.title,
    amount: item.quantity * (item.reducedPrice || item.price) * 100,
  }));

  const data = {
    customer: {
      name: user.username,
    },
    amount: parseInt(totalPrice || "") * 100, //in pasia,
    product_details: productBreakdown,
    amount_breakdown: amountBreakdown,
  };

  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      <div className="flex flex-1 flex-col">
        <div className="mb-4 flex flex-col justify-between gap-4 rounded-md bg-white px-6 py-6 text-sm shadow-sm">
          <p>Deliver to: Raj Thapa</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="flex flex-row gap-3">
              <p className="h-fit w-fit bg-accent/20 px-1.5 py-0.5 text-xs text-accent-dark">
                Home
              </p>
              <div className="flex flex-row">
                <p className="pr-1.5">9848741130</p>
                <p className="border-l-[1px] border-gray-400 pl-1.5">
                  Chunikhel, Kathmandu, Budhanilkantha - Chunikhel Buspark Area,
                  Kathmandu Outside Ring Road, Bagmati Province, near Karuna
                  Hospital
                </p>
              </div>
            </div>
            <p className="transition-smooth w-fit cursor-pointer text-blue-700 hover:text-blue-900">
              Change
            </p>
          </div>
          <div className="mt-3 flex flex-col gap-1">
            <div className="inline-flex gap-4">
              <p>Bill to the same address</p>
              <p className="transition-smooth cursor-pointer text-blue-700 hover:text-blue-900">
                Edit
              </p>
            </div>
            <div className="inline-flex gap-4">
              <p>Email to jyangoraj@gmail.com</p>
              <p className="transition-smooth cursor-pointer text-blue-700 hover:text-blue-900">
                Edit
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-xl shadow-sm">
          {products.map(
            ({
              _id,
              quantity,
              featured_img,
              title,
              price,
              reducedPrice,
            }: any) => {
              return (
                <div
                  className="bg flex h-fit flex-1 flex-col items-start gap-6 border-b-2 bg-white px-6 pb-2 pt-5 last:border-b-0 md:flex-row"
                  key={_id}
                >
                  <div className="flex min-w-[50%] flex-row gap-2">
                    {/* <MyCheckbox /> */}
                    <div className="relative -mt-4 aspect-square min-w-[8rem]">
                      <Image
                        alt="item"
                        fill
                        className="object-contain"
                        src={featured_img}
                      />
                    </div>
                    <p className="text-sm">{title}</p>
                  </div>

                  <div className="inline-flex w-full justify-between gap-8 pl-10 md:w-fit md:pl-0">
                    <div className="text-sm">
                      <p>Qty:{quantity}</p>
                    </div>

                    {reducedPrice ? (
                      <div className=" flex flex-col gap-2">
                        <p className="text-left text-lg text-red-500">
                          Rs.{reducedPrice}
                        </p>
                        <div className="flex flex-row items-center justify-center gap-2">
                          <p className="text-sm text-gray-500 line-through">
                            Rs.{price}
                          </p>
                          <p className="text-sm text-gray-900">
                            -{(100 * (price - reducedPrice)) / price}%
                          </p>
                        </div>
                      </div>
                    ) : (
                      <p className="text-left text-lg text-gray-700">
                        Rs.{price}
                      </p>
                    )}
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>

      <div className="flex h-fit w-full flex-col gap-3 rounded-md bg-white p-4 shadow-sm lg:w-[350px]">
        <p className="text-md font-semibold text-gray-800">Order Summary</p>
        <div className="flex flex-row justify-between">
          <p className="text-sm text-gray-800">
            Subtotal ({products.length} items)
          </p>
          <p className="">Rs. {totalPrice}</p>
        </div>
        <div className="flex flex-row justify-between">
          <p className="text-sm font-semibold">Total</p>
          <p className="font-semibold text-red-500">Rs. {totalPrice}</p>
        </div>
        <MyButton
          className="w-full !py-4"
          onClick={() => {
            mutation.mutate(data, {
              onSuccess: (data) => {
                router.push(data.payment_url);
              },
              onError: (error) => ErrorHandler(error),
            });
          }}
        >
          Place Order
        </MyButton>
      </div>
    </div>
  );
}
