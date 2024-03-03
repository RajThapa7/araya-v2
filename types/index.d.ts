interface IProductCard {
  price: number;
  reducedPrice?: number;
  img: string;
  title: string;
  tag?: string;
}

interface ITabProps {
  data: {
    label: string;
    value: string;
    desc: React.ReactNode;
  }[];
  className?: string;
}

export type { IProductCard, ITabProps };
