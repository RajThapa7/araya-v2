interface IProductCard {
  id: number;
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
}
interface IFormData {
  id: number;
  label: string;
  name: string;
  placeholder: string;
  tag?: string;
  type?: "dropdown" | "number" | "image";
  dropdownData?: {
    label: string;
    value: string;
  }[];
}

type FormInputType = { [key: string]: string | number | null | undefined };

export type {
  FormInputType,
  ICategory,
  IFormData,
  IProductCard,
  IProductData,
  IProductListData,
  ITabProps,
};
