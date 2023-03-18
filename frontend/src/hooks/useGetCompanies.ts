import { useEffect, useState } from "react";
import { Company } from "../models/company.model";
import http from "../services/http";

export const useGetCompanies = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const getCompanies = async () => {
    try {
      const response = await http.get<Company[]>("/companies");
      const data = response.data;
      setCompanies(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getCompanies();
  }, []);

  return { companies, loading, error, getCompanies };
};
