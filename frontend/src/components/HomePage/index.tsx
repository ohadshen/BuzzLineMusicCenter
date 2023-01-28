import React from "react";
import { Button, Card } from "react-bootstrap";
import { useGetProducts } from "../../hooks/useGetProducts";
import { Product } from "../../models/product.model";
import "./index.css";

export default function HomePage() {
  const { products, loading, error } = useGetProducts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  console.log(products);

  const productCard = (product: Product) => (
    <div className="col-10 my-1 max-auto">
      <div className="row cardRow">
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
    </div>
  );

  return (
    <div className="container d-flex justify-content-center">
      <div className="row ">
        {products.map((product) => {
          console.log("lastproduct:", product);

          return productCard(product);
        })}
      </div>
    </div>
  );
}
