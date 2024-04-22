import { IProductData } from "@/types";
import CategoryTitle from "../CategoryTitle/CategoryTitle";
import ProductCard from "../ProductCard/ProductCard";

const GridView = ({ data }: { data: IProductData[] }) => {
  return (
    <div>
      <div className="relative">
        <CategoryTitle title="Product" />

        <button
          className={
            "hover:text-accent absolute text-body right-4 font-semibold top-2"
          }
        >
          view all
        </button>
      </div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 place-items-center mt-6">
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
            index
          ) => (
            <ProductCard
              {...{ price, reducedPrice, tag, title }}
              img={img[0]}
              id={_id}
              averageRating={average_rating}
              ratingCount={ratingCount}
              key={index}
            />
          )
        )}
      </div>
    </div>
  );
};

export default GridView;
