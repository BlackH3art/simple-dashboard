import axios, { AxiosResponse } from 'axios';
import { CartInterface, CartsResponseInterface, CartToAddInterface } from '../interfaces/CartInterface';

const API = axios.create({
  baseURL: "https://dummyjson.com/carts",
});

export const getAllCarts = () => API.get<CartsResponseInterface>('');
export const addCart = (cart: CartToAddInterface) => API.post<CartInterface>('/add', cart);
export const deleteCart = (id: number) => API.delete(`/${id}`);