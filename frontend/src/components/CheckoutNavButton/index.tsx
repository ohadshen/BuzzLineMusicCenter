import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import {
  ShoppingCart,
  ShoppingCartContext,
} from "../../context/shoppingCartContext";
import "./index.css";
export default function CheckoutNavButton({
  onClick,
}: {
  onClick: () => void;
}) {
  const { cartProducts } = React.useContext(
    ShoppingCartContext
  ) as ShoppingCart;
  return (
    <div>
      <button
        onClick={onClick}
        type="button"
        className="btn btn-outline-light position-relative"
      >
        <FiShoppingCart />

        <span className="position-absolute start-100 translate-middle badge rounded-pill bg-danger">
          {cartProducts.length}
        </span>
      </button>
    </div>
  );
}
