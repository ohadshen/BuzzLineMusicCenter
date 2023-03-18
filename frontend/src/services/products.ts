import { Product } from "../models/product.model";
import http from "./http";

const updateProduct = async (id: string, data: Product) => {
  const response = await http.put<Product>(`/products/${id}`, data);
  return response.data;
};

const addProduct = async (data: Product) => {
  const response = await http.post<Product>(`/products`, data);
  return response.data;
};

const deleteProduct = async (id: string) => {
  const response = await http.delete<Product>(`/products/${id}`);
  return response.data;
};

export { updateProduct, addProduct, deleteProduct };
