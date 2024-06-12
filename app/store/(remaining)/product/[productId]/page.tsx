import ReviewSection from "@/features/ReviewSection/ReviewSection";
import { metaGenerator } from "@/features/metagenerator/metagenerator";
import { fetchProductData } from "@/features/store/(home)/server/initialDataFetch";
import ProductDetailSection from "@/features/store/product/DescriptionAndReviewTabBar";
import ProductDescriptionWithImageSlider from "@/features/store/product/ProductDescriptionWithImageSlider";
import RecommendedProductsByProductId from "@/features/store/product/RecommendedProducts";
import {
  fetchProductDataById,
  fetchProductReview,
} from "@/features/store/product/server/initialDataFetch";
import { getUserCookieData } from "@/utils/getUserCookieData";
import { Metadata } from "next";

type Props = {
  params: { productId: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await fetchProductDataById(params.productId);
  return {
    ...metaGenerator({
      title: `${product.title} | Araya Arts Store`,
      openGraph: {
        type: "website",
        siteName: "Araya Arts",
        description:
          "Araya Arts | Handmade Custom Notebooks and other art materials",
        url: `https://arayaarts.netlify.app/store/product/${params.productId}/`,
        images: {
          url: product.featured_img,
        },
      },
    }),
  };
}

export default async function ProductPage({
  params,
  searchParams,
}: {
  params: { productId: string };
  searchParams: Record<string, string>;
}) {
  const { productId } = params;
  const { page } = searchParams;

  const initialProductData = await fetchProductDataById(productId);

  const initialData = await fetchProductData();

  const { userId } = getUserCookieData();

  const initialReviewData = await fetchProductReview(productId, userId, page);

  return (
    <div className="relative flex flex-col gap-10">
      <ProductDescriptionWithImageSlider
        productId={productId}
        initialData={initialProductData}
      />

      <ProductDetailSection
        initialData={initialProductData}
        productId={productId}
      />
      <ReviewSection initialData={initialReviewData} />

      <RecommendedProductsByProductId initialData={initialData} />
    </div>
  );
}
