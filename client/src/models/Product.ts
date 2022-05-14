export interface Product {
  id?: string;
  name: string;
  description: string;
  category: string;
  image: string;
  price: number;
  count: number;
  isHot: boolean;
  isNew: boolean;
}