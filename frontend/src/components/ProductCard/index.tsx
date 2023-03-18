import React from "react";
import { Button, Card } from "react-bootstrap";
import { Product } from "../../models/product.model";
import { FiShoppingCart } from "react-icons/fi";
import {
  ShoppingCart,
  ShoppingCartContext,
} from "../../context/shoppingCartContext";
import "./index.css";

export default function ProductCard({
  product,
  isCheckout = false,
}: {
  product: Product;
  isCheckout?: boolean;
}) {
  const { addProduct } = React.useContext(ShoppingCartContext) as ShoppingCart;

  return (
    <div className="row cardRow  my-3">
      <Card className="productCard">
        <div className="col-2 cardImageContainer">
          <Card.Img className="cardImage" variant="top" src={product.image} />
        </div>
        <div className="col-6">
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>company:{product.company.name}</Card.Text>
            <Card.Text>price:{product.price}</Card.Text>
          </Card.Body>
        </div>
        {!isCheckout ? (
          <div className="col-3 mx-1">
            <Button
              variant="secondary"
              className="costumeBtn"
              onClick={() => addProduct(product)}
            >
              <FiShoppingCart />
              <br />
              Add To Cart
            </Button>
          </div>
        ) : null}
      </Card>
    </div>
  );
}
