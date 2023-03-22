import { ProductInterface, ProductsToAddInterface } from "./ProductInterface";

export interface CartInterface {
  id: number;
  products: ProductInterface[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}

export interface CartToAddInterface {
  userId: number;
  products: ProductsToAddInterface[];
}

export interface CartDeletedInterface extends CartInterface {
  isDeleted: boolean;
  deletedOn: string;
}

export interface CartsResponseInterface {
  carts: CartInterface[];
  total: number;
  skip: number;
  limit: number;
}