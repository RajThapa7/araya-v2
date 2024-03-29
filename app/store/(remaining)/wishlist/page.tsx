"use client";
import { montserrat } from "@/app/fonts";
import Empty from "@/components/Empty/Empty";
import MyCheckbox from "@/components/MyCheckbox/MyCheckbox";
import ProductSlider from "@/components/ProductSlider/ProductSlider";
import SmallProductCard from "@/components/SmallProductCard/SmallProductCard";
import { data } from "@/data/productData";
import { Option, Select } from "@material-tailwind/react";
import { useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";

const Category = () => {
  const [sortValue, setSortValue] = useState("price");
  const [selected, setSelected] = useState<number[]>([]);

  return (
    <div className="flex flex-col gap-20">
      <Empty
        title="There is no item in your wishlist"
        className={data.length === 0 ? "flex" : "hidden"}
      />

      {/* wishlist div */}
      <div className={data.length === 0 ? "hidden" : ""}>
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
                  return setSelected(data.map((_, index) => index));
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

        {/* product lists */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.map(({ img, price, title, reducedPrice, tag, id }, index) => (
            <div key={index} className="flex flex-row">
              <MyCheckbox
                color="green"
                checked={selected.includes(index)}
                onChange={(e) => {
                  setSelected(() => {
                    // add selected value to the array
                    if (e.target.checked) {
                      return [...selected, index];
                    }
                    // if unselected remove the value from the array
                    return selected.filter((item) => item !== index);
                  });
                }}
              />
              <SmallProductCard
                {...{ img, price, reducedPrice, tag, title, id }}
                className={`${selected.includes(index) && "!outline-accent"}`}
              />
            </div>
          ))}
        </div>
      </div>

      <ProductSlider data={data} title="Picks for you" />
    </div>
  );
};

export default Category;
