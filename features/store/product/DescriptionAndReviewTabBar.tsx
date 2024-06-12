"use client";
import useFetchProductById from "@/api/hooks/products/useFetchProductById";
import ProductDetail from "@/components/ProductDetail/ProductDetail";
import { IProductData } from "@/types";

export default function ProductDetailSection({
  initialData,
  productId,
}: {
  initialData: IProductData;
  productId: string;
}) {
  const { data: productData } = useFetchProductById(productId, initialData);

  return (
    <>
      {productData && (
        <ProductDetail
          data={productData}
          className="rounded-md bg-primary p-10"
        />
      )}
    </>
  );
}
