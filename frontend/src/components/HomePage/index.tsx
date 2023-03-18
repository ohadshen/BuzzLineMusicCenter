import React, { useContext, useEffect, useMemo } from "react";
import { Button } from "react-bootstrap";
import { useGetProducts } from "../../hooks/useGetProducts";
import CustomDropdown from "../DropDown";
import FilterSlider from "../FilterSlider";
import { RiFilterOffLine } from "react-icons/ri";

import "./index.css";
import ProductCard from "../ProductCard";
import {
  SocketIOContext,
  SocketIOContextValue,
} from "../../context/socketIOContext";
import { REFETCH_PRODUCTS_EVENT } from "../../events";

export default function HomePage() {
  const { products, loading, error, refetch } = useGetProducts();

  const [selectedCompany, setSelectedCompany] = React.useState<string | null>();
  const [selectedProductType, setSelectedProductType] = React.useState<
    string | null
  >();
  const [selectedPriceRange, setSelectedPriceRange] = React.useState<{
    min: number;
    max: number;
  }>({ min: 0, max: Number.MAX_VALUE });

  const { socket } = useContext(SocketIOContext) as SocketIOContextValue;

  const minPrice = useMemo(() => {
    return Math.min(...products.map((product) => product.price));
  }, [products]);

  const maxPrice = useMemo(() => {
    return Math.max(...products.map((product) => product.price));
  }, [products]);

  useEffect(() => {
    if (socket) socket.on(REFETCH_PRODUCTS_EVENT, () => refetch());

    return () => {
      if (socket) socket.off(REFETCH_PRODUCTS_EVENT);
    };
  }, [refetch, socket]);

  const clearFilters = () => {
    setSelectedCompany(null);
    setSelectedProductType(null);
    setSelectedPriceRange({ min: 0, max: Number.MAX_VALUE });
  };

  const clearFiltersIconButton = (
    <Button variant="outline-secondary" onClick={clearFilters}>
      <RiFilterOffLine />
    </Button>
  );

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        if (!selectedCompany) return true;
        return product.company.name === selectedCompany;
      })
      .filter((product) => {
        if (!selectedProductType) return true;
        return product.productType.name === selectedProductType;
      })
      .filter((product) => {
        return (
          product.price >= selectedPriceRange.min &&
          product.price <= selectedPriceRange.max
        );
      });
  }, [
    products,
    selectedCompany,
    selectedProductType,
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
          <CustomDropdown
            options={products
              .map((product) => {
                return product.company.name;
              })
              .filter((value, index, self) => {
                return self.indexOf(value) === index;
              })}
            title={selectedCompany ?? "Company"}
            onSelect={(option) => {
              setSelectedCompany(option);
            }}
          />
        </div>
        <div className="col-2 d-flex justify-content-center">
          <CustomDropdown
            options={products
              .map((product) => {
                return product.productType.name;
              })
              .filter((value, index, self) => {
                return self.indexOf(value) === index;
              })}
            title={selectedProductType ?? "ProductType"}
            onSelect={(option) => {
              setSelectedProductType(option);
            }}
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
        {filteredProducts.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </>
  );
}
