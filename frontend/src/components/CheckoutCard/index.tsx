import React, { useMemo } from "react";
import { Card } from "react-bootstrap";
import {
  ShoppingCart,
  ShoppingCartContext,
} from "../../context/shoppingCartContext";
import CheckoutButton from "../CheckoutButton";
import "./index.css";

export default function CheckoutCard({ onClick }: { onClick: () => void }) {
  const { cartProducts } = React.useContext(
    ShoppingCartContext
  ) as ShoppingCart;

  const totalPrice = useMemo(
    () =>
      cartProducts.reduce((acc, product) => {
        return acc + product.price;
      }, 0),
    [JSON.stringify(cartProducts)]
  );

  return (
    <Card
      style={{
        borderColor: "rgb(35, 192, 142)",
        width: "100%",
        backgroundColor: "rgb(35, 192, 142, 0.3)",
        display: "flex",
      }}
    >
      <Card.Body>
        <div className="container">
          <div className="row saleDetails">
            <div className="col">
              <Card.Title>Proceed Checkout</Card.Title>
            </div>
          </div>
          <div className="row saleDetails">
            <div className="col">
              <Card.Text>Total Price: {totalPrice}</Card.Text>
            </div>
          </div>
          <div className="row saleDetails">
            <div className="col">
              <Card.Text>Number of Products: {cartProducts.length}</Card.Text>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
