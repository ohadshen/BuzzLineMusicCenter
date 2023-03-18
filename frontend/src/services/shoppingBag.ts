import { Sale } from "../models/sales.model";
import http from "./http";

export const addSale = async (data: Sale) => {
  const response = await http.post<Sale>("/sales", data);
  return response.data;
};
