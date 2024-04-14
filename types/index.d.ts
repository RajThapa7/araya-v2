interface IProductCard {
  id: string;
  price: number;
  reducedPrice?: number;
  img: string;
  title: string;
  tag?: string;
  className?: string;
}

interface ITabProps {
  data: {
    label: string;
    value: string;
    desc: React.ReactNode;
  }[];
  className?: string;
  isProductDescription?: boolean;
}

interface IProductData {
  _id: string;
  title: string;
  featured_img: string;
  img: string[];
  price: number;
  reducedPrice?: number;
  tag?: string;
  description: string;
  productHighlight: string;
  category: ICategory;
  createdAt: Date;
  updatedAt: Date;
  isProductVisible: boolean;
  isStockAvailable: boolean;
  productCount: number;
}
interface IProductListData {
  count: number;
  totalCount: number;
  totalPages: number;
  data: IProductData[];
}

interface ICategory {
  _id: string;
  categoryName: string;
  createdAt: Date;
  updatedAt: Date;
  slug: string;
  productCount: number;
}

interface IFormData {
  id: number;
  label: string;
  name: string;
  placeholder: string;
  tag?: string;
  type?: "dropdown" | "number" | "image" | "checkbox";
  dropdownData?: {
    label: string;
    value: string;
  }[];
}

interface ICategoryListData {
  totalCount: number;
  totalPages: number;
  count: number;
  page: number;
  data: IProductData[];
}

type FormInputType = { [key: string]: string | number | null | undefined };

export type {
  FormInputType,
  ICategory,
  ICategoryListData,
  IFormData,
  IProductCard,
  IProductData,
  IProductListData,
  ITabProps,
};
