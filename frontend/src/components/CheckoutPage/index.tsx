import React, { useContext } from "react";
import {
  ShoppingCart,
  ShoppingCartContext,
} from "../../context/shoppingCartContext";
import CheckoutButton from "../CheckoutButton";
import CheckoutCard from "../CheckoutCard";
import ProductCard from "../ProductCard";
import "./index.css";
import { Product } from "../../models/product.model";
import { Sale } from "../../models/sales.model";
import { addSale } from "../../services/shoppingBag";
import CheckoutModal from "../Modal";

export default function CheckoutPage() {
  const { cartProducts, clearProducts } = React.useContext(
    ShoppingCartContext
  ) as ShoppingCart;

  const [showModal, setShowModal] = React.useState(false);

  const parseSale = (cartProducts: Product[]): Sale => {
    const sale: Sale = {
      products: cartProducts,
      totalPrice: cartProducts.reduce((acc, product) => acc + product.price, 0),
      date: new Date(),
    };

    return sale;
  };

  const checkout = async () => {
    await addSale(parseSale(cartProducts));
    setShowModal(true);
    clearProducts();
  };

  return (
    <>
      <div className="checkoutContainer justify-content-center align-middle">
        <div className="row checkoutCardAndButton">
          <div className="col-6 checkoutCard">
            <CheckoutCard onClick={() => alert(cartProducts)} />
          </div>
          <div className="col-4">
            <CheckoutButton
              disabled={!cartProducts.length}
              onClick={checkout}
            />
          </div>
        </div>
        {cartProducts.map((product) => (
          <ProductCard isCheckout={true} product={product} />
        ))}
      </div>
      <CheckoutModal show={showModal} handleClose={() => setShowModal(false)} />
    </>
  );
}
