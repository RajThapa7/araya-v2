"use client";
import useFetchProductList from "@/api/hooks/products/useFetchProducts";
import { MyTab } from "@/components/MyTab/MyTab";
import ProductSlider from "@/components/ProductSlider/ProductSlider";
const Desc = () => <p>hello</p>;

const StoreHomeTabBar = () => {
  const { data, isLoading } = useFetchProductList();
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
    {
      label: "Top Selling",
      value: "top-selling",
      desc: <Desc />,
    },
  ];
  return <MyTab data={tabData} />;
};

export default StoreHomeTabBar;
