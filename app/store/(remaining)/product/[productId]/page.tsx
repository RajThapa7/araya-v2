import { fetchProductData } from "@/features/store/(home)/server/initialDataFetch";
import DescriptionAndReviewTabBar from "@/features/store/product/DescriptionAndReviewTabBar";
import ProductDescriptionWithImageSlider from "@/features/store/product/ProductDescriptionWithImageSlider";
import RecommendedProductsByProductId from "@/features/store/product/RecommendedProducts";
import { fetchProductDataById } from "@/features/store/product/server/initialDataFetch";

export default async function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const { productId } = params;

  const initialProductData = await fetchProductDataById(productId);

  const initialData = await fetchProductData();

  return (
    <div className="relative flex flex-col gap-14">
      <ProductDescriptionWithImageSlider
        productId={productId}
        initialData={initialProductData}
      />

      <DescriptionAndReviewTabBar
        initialData={initialProductData}
        productId={productId}
      />

      <RecommendedProductsByProductId initialData={initialData} />
    </div>
  );
}
