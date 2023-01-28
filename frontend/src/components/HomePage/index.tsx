import React, { useMemo } from "react";
import { Button, Card, Dropdown } from "react-bootstrap";
import { useGetProducts } from "../../hooks/useGetProducts";
import { Product } from "../../models/product.model";
import FilterDropdown from "../FilterDropDown";
import FilterSlider from "../FilterSlider";
import { RiFilterOffLine } from "react-icons/ri";

import "./index.css";

export default function HomePage() {
  const { products, loading, error } = useGetProducts();

  const [selectedCompany, setSelectedCompany] = React.useState<string | null>();
  const [selectedProductType, setSelectedProductType] = React.useState<
    string | null
  >();
  const [selectedPriceRange, setSelectedPriceRange] = React.useState<{
    min: number;
    max: number;
  }>({ min: 0, max: Number.MAX_VALUE });

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

  const productCard = (product: Product) => (
    <div className="row cardRow my-1">
      <Card className="row productCard">
        <div className="col-4 cardImageContainer">
          <Card.Img className="cardImage" variant="top" src={product.image} />
        </div>
        <div className="col-8">
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>company:{product.company.name}</Card.Text>
            <Card.Text>price:{product.price}</Card.Text>
          </Card.Body>
        </div>
      </Card>
    </div>
  );

  return (
    <div className="container justify-content-center">
      <div className="row filters">
        <div className="col-1 mx-1">{clearFiltersIconButton}</div>
        <div className="col-2 mx-1">
          <FilterDropdown
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
        <div className="col-2 mx-1">
          <FilterDropdown
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
        <div className="col-3 mx-1">
          <FilterSlider
            min={Math.min(...products.map((product) => product.price))}
            max={Math.max(...products.map((product) => product.price))}
            onChange={(value) => {
              setSelectedPriceRange(value);
            }}
          />
        </div>
      </div>
      {filteredProducts.map((product) => {
        return productCard(product);
      })}
    </div>
  );
}
