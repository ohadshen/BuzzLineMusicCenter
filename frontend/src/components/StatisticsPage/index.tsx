import React from "react";
import { useGetNumOfProductsForCompanies } from "../../hooks/NumOfProductsForCompanies";
import { useGetProductsValueForCompanies } from "../../hooks/ProductsValueForCompanies";
import { CompaniesCounterChart } from "../CompaniesCounterChart";
import { CompaniesValueChart } from "../CompaniesValueChart";
import "./index.css";

export default function StatisticsPage() {
    const {
        companiesValue,
        loading: loadingCompaniesValue,
        error: errorCompaniesValue
      } = useGetProductsValueForCompanies();

    const {
        companiesCounter,
        loading: loadingCompaniesCounter,
        error: errorCompaniesCounter
    } = useGetNumOfProductsForCompanies();

    if (loadingCompaniesValue || loadingCompaniesCounter) return <div>Loading...</div>;
    if (errorCompaniesValue || errorCompaniesCounter) return <div>Error!</div>;

    return (
    <div className="page">
        <h4 className="title">sum of prices of products per company:</h4>
        <CompaniesValueChart data={ companiesValue } width = {700} height = { 400 }></CompaniesValueChart>
        <br/>
        <h4 className="title">number of products per company:</h4>
        <CompaniesCounterChart data={ companiesCounter } width = {700} height = { 400 }></CompaniesCounterChart>
    </div>
    );
}