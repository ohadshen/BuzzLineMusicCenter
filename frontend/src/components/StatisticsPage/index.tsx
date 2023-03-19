import React from "react";
import { useGetProductsValueForCompanies } from "../../hooks/ProductsValueForCompanies";
import { CompaniesValueChart } from "../CompaniesValueChart";
import "./index.css";

export default function StatisticsPage() {
    const {
        companiesValue,
        loading: loadingCompaniesValue,
        error: errorCompaniesValue
      } = useGetProductsValueForCompanies();

    if (loadingCompaniesValue) return <div>Loading...</div>;
    if (errorCompaniesValue) return <div>Error!</div>;

    return (
    <div className="page">
        <h4 className="title">sum of prices of products per company:</h4>
        <CompaniesValueChart data={ companiesValue } width = {700} height = { 400 }></CompaniesValueChart>
    </div>
    );
}