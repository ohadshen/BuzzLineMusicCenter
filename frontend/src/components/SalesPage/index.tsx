import React, { useContext, useEffect, useMemo } from "react";
import { Button } from "react-bootstrap";
import FilterSlider from "../FilterSlider";
import { RiFilterOffLine } from "react-icons/ri";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./index.css";
import {
  SocketIOContext,
  SocketIOContextValue,
} from "../../context/socketIOContext";
import SaleCard from "../SaleCard/index";
import { useGetSales } from "../../hooks/useGetSales";

export default function SalesPage() {
  //   const { products: sales, loading, error, refetch } = useGetProducts();

  const { sales, loading, error } = useGetSales();

  //   const [selectedCompany, setSelectedCompany] = React.useState<string | null>();
  //   const [selectedProductType, setSelectedProductType] = React.useState<
  //     string | null
  //   >();
  const [startDate, setStartDate] = React.useState<string | null>();
  const [endDate, setEndDate] = React.useState<string | null>();

  const [selectedPriceRange, setSelectedPriceRange] = React.useState<{
    min: number;
    max: number;
  }>({ min: 0, max: Number.MAX_VALUE });

  const { socket } = useContext(SocketIOContext) as SocketIOContextValue;

  const minPrice = useMemo(() => {
    return Math.min(...sales.map((sale) => sale.totalPrice));
  }, [sales]);

  const maxPrice = useMemo(() => {
    return Math.max(...sales.map((sale) => sale.totalPrice));
  }, [sales]);

  const clearFilters = () => {
    setStartDate(null);
    setEndDate(null);
    setSelectedPriceRange({ min: 0, max: Number.MAX_VALUE });
  };

  const clearFiltersIconButton = (
    <Button variant="outline-secondary" onClick={clearFilters}>
      <RiFilterOffLine />
    </Button>
  );

  const filteredSales = useMemo(() => {
    return sales
      .filter((sale) => {
        if (!startDate) return true;
        return (
          new Date(sale.date).getTime() >=
          new Date(new Date(startDate).setHours(0, 0, 0)).getTime()
        );
      })
      .filter((sale) => {
        if (!endDate) return true;
        return (
          new Date(sale.date).getTime() <=
          new Date(new Date(endDate).setHours(23, 59, 59)).getTime()
        );
      })
      .filter((sale) => {
        return (
          sale.totalPrice >= selectedPriceRange.min &&
          sale.totalPrice <= selectedPriceRange.max
        );
      });
  }, [
    sales,
    startDate,
    endDate,
    selectedPriceRange.max,
    selectedPriceRange.min,
  ]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  return (
    <>
      <div className="row filters justify-content-center">
        <div className="col-2 d-flex justify-content-center">
          {clearFiltersIconButton}
        </div>
        <div className="col-2 d-flex justify-content-center">
          <h5>start:</h5>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>

        <div className="col-2 d-flex justify-content-center">
          <h5>end:</h5>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
          />
        </div>
        <div className="col-2 d-flex justify-content-center">
          <FilterSlider
            min={minPrice}
            max={maxPrice}
            onChange={(value) => {
              setSelectedPriceRange(value);
            }}
          />
        </div>
      </div>
      <div className="innerContainer justify-content-center">
        {filteredSales.map((sale) => (
          <SaleCard sale={sale} />
        ))}
      </div>
    </>
  );
}
