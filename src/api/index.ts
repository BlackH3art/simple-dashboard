import axios from 'axios';
import { CartInterface, CartToAddInterface } from '../interfaces/CartInterface';

const API = axios.create({
  baseURL: "https://dummyjson.com/carts",
});

export const getAllCarts = () => API.get<CartInterface>('');
export const addCart = (cart: CartToAddInterface) => API.post<CartInterface>('/add', cart);
export const deleteCart = (id: number) => API.delete(`/${id}`);