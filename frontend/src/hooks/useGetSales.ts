import { useEffect, useState } from "react";
import { Sale } from "../models/sales.model";
import http from "../services/http";

export const useGetSales = () => {
  const [sales, setSales] = useState<Sale[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const getSales = async () => {
    try {
      const response = await http.get<Sale[]>("/sales");
      const data = response.data;
      setSales(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getSales();
  }, []);

  return { sales, loading, error };
};
