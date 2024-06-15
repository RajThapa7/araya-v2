"use client";

import { useAuth } from "@/Providers/AuthProvider";
import useAddProductToCart from "@/api/hooks/cart/useAddProductToCart";
import useFetchWishlist, {
  IWishlist,
} from "@/api/hooks/wishlist/useFetchWishlist";
import useRemoveProductFromWishlist from "@/api/hooks/wishlist/useRemoveProductFromWishlist";
import { montserrat } from "@/app/fonts";
import Empty from "@/components/Empty/Empty";
import ErrorHandler from "@/components/ErrorHandler/ErrorHandler";
import MyCheckbox from "@/components/MyCheckbox/MyCheckbox";
import CardSkeletal from "@/components/Skeletal/CardSkeletal";
import SmallProductCard from "@/components/SmallProductCard/SmallProductCard";
import { Option, Select } from "@material-tailwind/react";
import { useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { toast } from "react-toastify";

const WishlistItems = ({
  initialWishListData,
}: {
  initialWishListData: IWishlist;
}) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [sortValue, setSortValue] = useState("price");
  const { token, user } = useAuth();
  const { isLoading, data: wishlistData } = useFetchWishlist(
    user?._id,
    initialWishListData,
  );

  const removeWishlistMutation = useRemoveProductFromWishlist();
  const addToCartMutation = useAddProductToCart();

  const handleMultiWishlistRemove = () => {
    removeWishlistMutation.mutate(
      { userId: user._id, productId: selected },
      {
        onSuccess: (data) => {
          toast.success(data.message);
          // after removing the item from wishlist also remove it from the selected items
          setSelected([]);
        },
        onError: (error) => ErrorHandler(error),
      },
    );
  };

  const handleMultiItemAddToCart = () => {
    addToCartMutation.mutate(
      { userId: user._id, productId: selected },
      {
        onSuccess: (data) => {
          toast.success(data.message);
          setSelected([]);
        },
        onError: (error) => ErrorHandler(error),
      },
    );
  };

  return (
    <div>
      <Empty
        title="There is no item in your wishlist"
        className={wishlistData?.products.length === 0 ? "flex" : "hidden"}
      />
      {isLoading && <CardSkeletal count={8} />}
      <div className={wishlistData?.products.length === 0 ? "hidden" : ""}>
        <div className="mb-8 flex flex-row items-center justify-between">
          <p className="text-2xl font-semibold capitalize text-body">
            My Wishlist
          </p>
          <div>
            <Select
              label="Sort by"
              value={sortValue}
              color="green"
              className={montserrat.className}
              onChange={(val) => setSortValue(val || "")}
            >
              <Option value="price">Price</Option>
              <Option value="rating">Ratings</Option>
            </Select>
          </div>
        </div>

        <div className="mb-4 flex flex-col bg-transparent py-1 pr-2 md:flex-row md:items-center md:justify-between">
          <div className="inline-flex items-center">
            <MyCheckbox
              color="green"
              onChange={(e) => {
                if (e.target.checked) {
                  return setSelected(
                    wishlistData?.products.map((item) => item._id) || [],
                  );
                }
                setSelected([]);
              }}
            />
            <p className="text-xs text-body">SELECT ALL ITEMS</p>
            <p
              className={`${
                selected.length !== 0 ? "flex" : "hidden"
              } ml-4 text-sm text-accent`}
            >
              {selected.length} items selected
            </p>
          </div>
          <div className="ml-1 flex flex-row gap-2 md:ml-0">
            <button
              className="inline-flex items-center gap-1 rounded-full p-1.5 text-body transition hover:text-accent"
              onClick={handleMultiItemAddToCart}
            >
              <MdOutlineShoppingCart className="text-lg text-gray-500" />
              <p className="text-xs">ADD TO CART</p>
            </button>
            <button
              className="inline-flex items-center gap-1 rounded-full p-1.5 text-body transition hover:text-accent"
              onClick={handleMultiWishlistRemove}
            >
              <FiTrash2 className="text-lg text-gray-500" />
              <p className="text-xs">REMOVE</p>
            </button>
          </div>
        </div>
      </div>
      {/* product lists */}
      {!isLoading && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {wishlistData?.products.map(
            ({
              featured_img,
              price,
              title,
              reducedPrice,
              tag,
              _id,
              average_rating,
              ratingCount,
            }) => (
              <div key={_id} className="flex flex-row">
                <MyCheckbox
                  color="green"
                  checked={selected.includes(_id)}
                  onChange={(e) => {
                    setSelected(() => {
                      // add selected value to the array
                      if (e.target.checked) {
                        return [...selected, _id];
                      }
                      // if unselected remove the value from the array
                      return selected.filter((item) => item !== _id);
                    });
                  }}
                />
                <SmallProductCard
                  ratingCount={ratingCount}
                  averageRating={average_rating}
                  fav={true}
                  id={_id}
                  img={featured_img}
                  {...{ price, reducedPrice, tag, title }}
                  className={`${selected.includes(_id) && "!outline-accent"} h-[210px]`}
                />
              </div>
            ),
          )}
        </div>
      )}
    </div>
  );
};

export default WishlistItems;
