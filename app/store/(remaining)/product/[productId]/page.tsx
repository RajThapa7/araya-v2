import { metaGenerator } from "@/features/metagenerator/metagenerator";
import { fetchProductData } from "@/features/store/(home)/server/initialDataFetch";
import DescriptionAndReviewTabBar from "@/features/store/product/DescriptionAndReviewTabBar";
import ProductDescriptionWithImageSlider from "@/features/store/product/ProductDescriptionWithImageSlider";
import RecommendedProductsByProductId from "@/features/store/product/RecommendedProducts";
import { fetchProductDataById } from "@/features/store/product/server/initialDataFetch";
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
}: {
  params: { productId: string };
}) {
  const { productId } = params;

  const initialProductData = await fetchProductDataById(productId);

  const initialData = await fetchProductData();

  return (
    <div className="relative flex flex-col gap-10">
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
