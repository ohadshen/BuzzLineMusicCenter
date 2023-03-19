import React from "react";
import { Card } from "react-bootstrap";
import {
  ShoppingCart,
  ShoppingCartContext,
} from "../../context/shoppingCartContext";
import "./index.css";
import { Sale } from "../../models/sales.model";
import ProductCard from "../ProductCard";

export default function SaleCard({
  sale,
}: {
  sale: Sale;
  isCheckout?: boolean;
}) {
  const { addProduct } = React.useContext(ShoppingCartContext) as ShoppingCart;
  debugger;
  return (
    <div className="row my-3">
      <Card className="pb-4">
        <div className="col-6">
          <Card.Body>
            <Card.Text>price{sale.totalPrice}</Card.Text>
            <Card.Text>
              date:{new Date(sale.date).toLocaleDateString()}
            </Card.Text>
          </Card.Body>
        </div>
        {sale.products.map((product) => (
          <div>
            <ProductCard isCheckout={true} product={product} />
          </div>
        ))}
      </Card>
    </div>
  );
}
