"use client";
import useFetchProductList from "@/api/hooks/products/useFetchProducts";
import { MyTab } from "@/components/MyTab/MyTab";
import ProductSlider from "@/components/ProductSlider/ProductSlider";
import { IProductListData } from "@/types";

const Desc = () => <p>hello</p>;

const StoreHomeTabBar = ({
  initialData,
}: {
  initialData: IProductListData;
}) => {
  const { data, isLoading } = useFetchProductList(initialData);
  const tabData = [
    {
      label: "Top Rated",
      value: "top-rated",
      desc: (
        <ProductSlider
          isCategoryTitle={false}
          title="Related Products"
          data={data?.data || []}
          isLoading={isLoading}
        />
      ),
    },
    {
      label: "Top Discount",
      value: "top-discount",
      desc: <Desc />,
    },
  ];
  return <MyTab data={tabData} />;
};

export default StoreHomeTabBar;
