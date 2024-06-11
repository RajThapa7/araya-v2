import { IProductData } from "@/types";
import { RxCaretRight } from "react-icons/rx";
import CategoryTitle from "../CategoryTitle/CategoryTitle";
import ProductCard from "../ProductCard/ProductCard";

const GridView = ({ data }: { data: IProductData[] }) => {
  return (
    <div>
      <div className="relative px-4 md:px-0">
        <CategoryTitle title="Product" />

        <button
          className={
            "absolute right-4 top-2 inline-flex items-center justify-center font-semibold text-accent hover:text-accent-dark"
          }
        >
          view all
          <RxCaretRight size={20} />
        </button>
      </div>
      <div className="mt-6 grid grid-cols-1 place-items-center gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {data.map(
          (
            {
              img,
              price,
              title,
              average_rating,
              ratingCount,
              reducedPrice,
              tag,
              _id,
            },
            index,
          ) => (
            <ProductCard
              {...{ price, reducedPrice, tag, title }}
              img={img[0]}
              id={_id}
              averageRating={average_rating}
              ratingCount={ratingCount}
              key={index}
            />
          ),
        )}
      </div>
    </div>
  );
};

export default GridView;
