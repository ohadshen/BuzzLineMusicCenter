import React, { useMemo } from "react";
import { Button, Card, Dropdown } from "react-bootstrap";
import { useGetProducts } from "../../hooks/useGetProducts";
import { Product } from "../../models/product.model";
import CustomDropdown from "../DropDown";
import FilterSlider from "../FilterSlider";
import { RiFilterOffLine } from "react-icons/ri";

import "./index.css";
import ProductCard from "../ProductCard";
import {
  ShoppingCart,
  ShoppingCartContext,
} from "../../context/shoppingCartContext";
import CheckoutCard from "../CheckoutCard";
import { useNavigate } from "react-router-dom";
import EditProductCard from "../EditProductCard";
import { useGetCompanies } from "../../hooks/useGetCompanies";

export default function HomePage() {
  const {
    products,
    loading: loadingProducts,
    error: errorProducts,
    refetch,
  } = useGetProducts();
  const {
    companies,
    loading: loadingCompanies,
    error: errorCompanies,
  } = useGetCompanies();

  const [selectedCompany, setSelectedCompany] = React.useState<string | null>();
  const [selectedProductType, setSelectedProductType] = React.useState<
    string | null
  >();
  const [selectedPriceRange, setSelectedPriceRange] = React.useState<{
    min: number;
    max: number;
  }>({ min: 0, max: Number.MAX_VALUE });

  const { cartProducts } = React.useContext(
    ShoppingCartContext
  ) as ShoppingCart;

  const navigate = useNavigate();

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

  if (errorCompanies || errorProducts) return <div>Error!</div>;
  if (loadingCompanies || loadingProducts) return <div>Loading...</div>;

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
            min={Math.min(...products.map((product) => product.price))}
            max={Math.max(...products.map((product) => product.price))}
            onChange={(value) => {
              setSelectedPriceRange(value);
            }}
          />
        </div>
      </div>
      <div className="innerContainer justify-content-center">
        {filteredProducts.map((product) => (
          <EditProductCard
            product={product}
            refetchProducts={refetch}
            companies={companies}
          />
        ))}
      </div>
    </>
  );
}
