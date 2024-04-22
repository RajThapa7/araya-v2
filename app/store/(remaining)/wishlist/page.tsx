"use client";
import { useAuth } from "@/Providers/AuthProvider";
import useFetchProductList from "@/api/hooks/products/useFetchProducts";
import useFetchWishlist from "@/api/hooks/wishlist/useFetchWishlist";
import { montserrat } from "@/app/fonts";
import Empty from "@/components/Empty/Empty";
import MyButton from "@/components/MyButton";
import MyCheckbox from "@/components/MyCheckbox/MyCheckbox";
import ProductSlider from "@/components/ProductSlider/ProductSlider";
import CardSkeletal from "@/components/Skeletal/CardSkeletal";
import SmallProductCard from "@/components/SmallProductCard/SmallProductCard";
import { useAppSelector } from "@/lib/hooks";
import { Option, Select } from "@material-tailwind/react";
import { useRouter } from "next-nprogress-bar";
import Image from "next/image";
import { useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";

const Category = () => {
  const [sortValue, setSortValue] = useState("price");
  const [selected, setSelected] = useState<string[]>([]);

  const { token, user } = useAuth();
  const isLoggedIn = !!token;

  const router = useRouter();

  const { isLoading, data: wishlistData } = useFetchWishlist(user?._id);

  const { wishlist } = useAppSelector((state) => state.wishlist);

  const { data, isLoading: isProductLoading } = useFetchProductList();

  if (!isLoggedIn) {
    return (
      <div className="flex flex-col gap-8 items-center">
        <p className="font-semibold text-header text-2xl">
          Login to access your wishlist
        </p>
        <Image
          src={require("@/public/login.svg")}
          alt="login"
          width={400}
          height={200}
        />
        <MyButton className="!py-3" onClick={() => router.push("/store/login")}>
          {" "}
          Login
        </MyButton>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-20">
      <Empty
        title="There is no item in your wishlist"
        className={wishlistData?.products.length === 0 ? "flex" : "hidden"}
      />

      {/* wishlist div */}
      <div className={wishlistData?.products.length === 0 ? "hidden" : ""}>
        <div className="mb-8 flex flex-row justify-between items-center">
          <p className="text-2xl text-body font-semibold capitalize">
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

        <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between bg-transparent py-1 pr-2">
          <div className="inline-flex items-center">
            <MyCheckbox
              color="green"
              onChange={(e) => {
                if (e.target.checked) {
                  return setSelected(
                    wishlistData?.products.map((item) => item._id) || []
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
              // onClick={handleWishlistClick}
            >
              <MdOutlineShoppingCart className="text-lg text-gray-500" />
              <p className="text-xs">ADD TO CART</p>
            </button>
            <button
              className="inline-flex items-center gap-1 rounded-full p-1.5 text-body transition hover:text-accent"
              // onClick={handleWishlistClick}
            >
              <FiTrash2 className="text-lg text-gray-500" />
              <p className="text-xs">REMOVE</p>
            </button>
          </div>
        </div>

        {isLoading && <CardSkeletal count={8} />}

        {/* product lists */}
        {!isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    className={`${selected.includes(_id) && "!outline-accent"}`}
                  />
                </div>
              )
            )}
          </div>
        )}
      </div>

      <ProductSlider
        data={data?.data || []}
        title="Picks for you"
        isLoading={isProductLoading}
        breakpoints={{
          540: {
            slidesPerView: 2,
            grid: {
              fill: "row",
              rows: 2,
            },
          },
          840: {
            slidesPerView: 3,
            grid: {
              fill: "row",
              rows: 2,
            },
          },
          1160: {
            slidesPerView: 4,
            grid: {
              fill: "row",
              rows: 2,
            },
          },
        }}
      />
    </div>
  );
};

export default Category;
