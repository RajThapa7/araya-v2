interface IProductCard {
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

export type { IProductCard, ITabProps };
