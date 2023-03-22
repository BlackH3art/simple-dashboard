import axios from 'axios';

const API = axios.create({
  baseURL: "https://dummyjson.com/carts",
});

export const getAllCarts = () => API.get('');
export const addCart = (cart: any) => API.post('/add', cart);
export const deleteCart = (id: number) => API.delete(`/${id}`);