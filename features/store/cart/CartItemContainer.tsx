"use client";
import useFetchCart from "@/api/hooks/cart/useFetchCart";
import useRemoveProductFromCart from "@/api/hooks/cart/useRemoveProductFromCart";
import { IWishlist } from "@/api/hooks/wishlist/useFetchWishlist";
import Empty from "@/components/Empty/Empty";
import ErrorHandler from "@/components/ErrorHandler/ErrorHandler";
import MyButton from "@/components/MyButton";
import MyCheckbox from "@/components/MyCheckbox/MyCheckbox";
import MyInput from "@/components/MyInput/MyInput";
import CartSkeletal from "@/components/Skeletal/CartSkeletal";
import { mergeTwoArray } from "@/utils/utilsFunction";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { toast } from "react-toastify";
import CartItem from "./CartItem";

const CartItemContainer = ({
  userId,
  initialData,
}: {
  userId: string;
  initialData: IWishlist;
}) => {
  const router = useRouter();

  const [selected, setSelected] = useState<{ id: string; quantity: number }[]>(
    []
  );

  const selectedItemCount = selected.reduce(
    (prev, curr) => prev + curr.quantity,
    0
  );

  const { isLoading, data: cartData } = useFetchCart(userId, initialData);

  const totalPrice = mergeTwoArray(cartData?.products || [], selected, "id")
    .filter((outer) => {
      return selected.some(({ id }) => id === outer.id);
    })
    .reduce(
      (prev, curr) => prev + (curr.reducedPrice || curr.price) * curr.quantity,
      0
    );

  const removeCartMutation = useRemoveProductFromCart();

  const handleCartRemove = (productId: string) => {
    removeCartMutation.mutate(
      { userId: userId, productId },
      {
        onSuccess: (data) => {
          toast.success(data.message);
          // after removing the item from cart also remove it from the selected items
          setSelected(() => {
            return selected.filter((item) => item.id !== productId);
          });
        },
        onError: (error) => ErrorHandler(error),
      }
    );
  };

  const handleMultiCartItemsRemove = () => {
    const selectedProductIds = selected.map((item) => item.id);
    removeCartMutation.mutate(
      { userId: userId, productId: selectedProductIds },
      {
        onSuccess: (data) => {
          toast.success(data.message);
          // after removing the item from cart also remove it from the selected items
          setSelected(() => {
            return selected.filter(
              (item) => !selectedProductIds.includes(item.id)
            );
          });
        },
        onError: (error) => ErrorHandler(error),
      }
    );
  };

  const handleCheckout = () => {
    if (selected.length === 0) {
      toast.warn("Please select at least one item to checkout");
      return;
    }
    const query = JSON.stringify(
      mergeTwoArray(cartData?.products || [], selected, "id").filter(
        (item) => item.quantity >= 1
      )
    );

    const encoded = encodeURIComponent(query);
    router.push(`/store/checkout?products=${encoded}&totalPrice=${totalPrice}`);
  };

  return (
    <div>
      <Empty
        title="Your cart is empty"
        className={cartData?.products.length === 0 ? "flex" : "hidden"}
      />

      <div
        className={`${
          cartData?.products.length !== 0 ? "flex" : "hidden"
        } flex-col gap-4 lg:flex-row`}
      >
        <div className="flex flex-1 flex-col">
          <p className="text-2xl text-body font-semibold capitalize mb-8">
            My Cart
          </p>

          <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between bg-transparent py-1 pr-2">
            <div className="inline-flex items-center">
              <MyCheckbox
                color="green"
                onChange={(e) => {
                  if (e.target.checked) {
                    return setSelected(
                      cartData?.products.map(({ _id }) => ({
                        id: _id,
                        quantity: 1,
                      })) || []
                    );
                  }
                  setSelected([]);
                }}
              />
              <p className="text-xs text-body">SELECT ALL ITEMS</p>
              <p
                className={`${
                  selected.length !== 0 ? "flex" : "hidden"
                } text-accent text-sm ml-4`}
              >
                {selected.length} items selected
              </p>
            </div>
            <div className="flex flex-row gap-2 ml-1 md:ml-0">
              <button
                className="inline-flex items-center gap-1 rounded-full p-1.5 text-body transition hover:text-accent"
                onClick={handleMultiCartItemsRemove}
              >
                <FiTrash2 className="text-lg text-gray-500" />
                <p className="text-xs">REMOVE</p>
              </button>
            </div>
          </div>

          {/* skeletal loader */}
          {isLoading && <CartSkeletal />}

          {/* cart items */}
          {!isLoading &&
            cartData?.products.map((item) => (
              <CartItem
                item={item}
                key={item._id}
                selected={selected}
                setSelected={setSelected}
                handleCartRemove={handleCartRemove}
              />
            ))}
        </div>

        {/* checkout menu */}
        <div className="flex h-fit w-full max-w-lg rounded-md flex-col gap-3 bg-white p-4 shadow-sm lg:mt-32 lg:w-fit">
          <p className="text-md font-semibold text-gray-800">Order Summary</p>
          <div className="flex flex-row justify-between">
            <p className="text-sm text-gray-800">
              Subtotal ({selectedItemCount} items)
            </p>
            <p className="">Rs. {totalPrice.toLocaleString("en-IN")}</p>
          </div>
          <div className="inline-flex gap-2">
            <MyInput placeholder="Enter voucher" className="" />
            <MyButton>Apply</MyButton>
          </div>
          <div className="flex flex-row justify-between">
            <p className="text-sm font-semibold">Total</p>
            <p className="font-semibold text-orange-700">
              Rs. {totalPrice.toLocaleString("en-IN")}
            </p>
          </div>
          <MyButton className="w-full !py-4" onClick={() => handleCheckout()}>
            Proceed to Checkout
          </MyButton>
        </div>
      </div>
    </div>
  );
};

export default CartItemContainer;
