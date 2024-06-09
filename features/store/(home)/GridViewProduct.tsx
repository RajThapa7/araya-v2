"use client";
import useFetchProductList from "@/api/hooks/products/useFetchProducts";
import GridView from "@/components/GridView/GridView";
import { IProductListData } from "@/types";

const GridViewProduct = ({
  initialData,
}: {
  initialData: IProductListData;
}) => {
  const { data: productData, isLoading } = useFetchProductList(initialData);
  return (
    <>{!isLoading && productData && <GridView data={productData?.data} />}</>
  );
};

export default GridViewProduct;
