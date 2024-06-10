import CategoryItemContainer from "@/features/store/category/CategoryItemContainer";
import { fetchItemsUnderCategory } from "@/features/store/category/server/fetchInitialData";

const Category = async ({
  params,
  searchParams,
}: {
  params: { category: string };
  searchParams: {
    [key: string]: string;
  };
}) => {
  const { category } = params;

  const initialData = await fetchItemsUnderCategory(category);

  return (
    <div>
      <CategoryItemContainer category={category} initialData={initialData} />
    </div>
  );
};

export default Category;
