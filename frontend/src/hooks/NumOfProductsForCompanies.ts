import { useEffect, useState } from "react";
import { NumOfProductsForCompany } from "../models/dto/numOfProductsForCompany.dto";
import http from "../services/http";

export const useGetNumOfProductsForCompanies = () => {
  const [companiesCounter, setCompaniesCounter] = useState<NumOfProductsForCompany[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const getNumOfProductsForCompanies = async () => {
    try {
      const response = await http.get<NumOfProductsForCompany[]>("/products/companies/count");
      const data = response.data;
      console.log(data);
      setCompaniesCounter(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getNumOfProductsForCompanies();
  }, []);

  return { companiesCounter, loading, error, getNumOfProductsForCompanies };
};
