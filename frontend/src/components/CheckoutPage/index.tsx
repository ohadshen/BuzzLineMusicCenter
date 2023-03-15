import React from "react";
import {
  ShoppingCart,
  ShoppingCartContext,
} from "../../context/shoppingCartContext";
import CheckoutButton from "../CheckoutButton";
import CheckoutCard from "../CheckoutCard";
import ProductCard from "../ProductCard";
import "./index.css";

export default function CheckoutPage() {
  const { cartProducts } = React.useContext(
    ShoppingCartContext
  ) as ShoppingCart;

  return (
    <div className="checkoutContainer justify-content-center align-middle">
      <div className="row checkoutCardAndButton">
        <div className="col-6 checkoutCard">
          <CheckoutCard onClick={() => alert(cartProducts)} />
        </div>
        <div className="col-4">
          <CheckoutButton
            disabled={!cartProducts.length}
            onClick={() => alert(cartProducts)}
          />
        </div>
      </div>
      {cartProducts.map((product) => (
        <ProductCard isCheckout={true} product={product} />
      ))}
    </div>
  );
}
