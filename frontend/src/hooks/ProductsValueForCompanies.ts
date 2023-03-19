import { useEffect, useState } from "react";
import { ProductsValueForCompany } from "../models/dto/productsValueForCompany.dto";
import http from "../services/http";

export const useGetProductsValueForCompanies = () => {
  const [companiesValue, setCompaniesValue] = useState<ProductsValueForCompany[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const getProductsValueForCompanies = async () => {
    try {
      const response = await http.get<ProductsValueForCompany[]>("/products/companies/value");
      const data = response.data;
      setCompaniesValue(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductsValueForCompanies();
  }, []);

  return { companiesValue, loading, error, getProductsValueForCompanies };
};
