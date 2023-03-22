export interface ProductInterface {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedPrice: number;
}

export interface ProductsToAddInterface {
  id: number;
  quantity: number;
}