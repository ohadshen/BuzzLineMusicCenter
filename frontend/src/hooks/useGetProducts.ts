import { useEffect, useState } from "react";
import { Company } from "../models/company.model";
import { Product } from "../models/product.model";
import { ProductType } from "../models/productType.model";
import http from "../services/http";

export const useGetProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const getProducts = async () => {
    try {
      const response = await http.get<Product[]>("/products");
      const data = response.data;
      setProducts(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return { products, loading, error, refetch: getProducts };
};
