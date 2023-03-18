import { useEffect, useState } from "react";
import http from "../services/http";
import { ProductType } from "../models/productType.model";

export const useGetProductTypes = () => {
  const [productTypes, setProductTypes] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const getProductTypes = async () => {
    try {
      const response = await http.get<ProductType[]>("/productTypes");
      const data = response.data;
      setProductTypes(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductTypes();
  }, []);

  return {
    productTypes,
    loading,
    error,
    getProductTypes,
  };
};
