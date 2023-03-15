import React from "react";
import { Product } from "../models/product.model";

export interface ShoppingCart {
  cartProducts: Product[];
  addProduct: (product: Product) => void;
}

export const ShoppingCartContext = React.createContext({});

export const ShoppingCartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = React.useState<Product[]>([]);

  const addProduct = (product: Product) => {
    setCartProducts([...cartProducts, product]);
  };

  const value: ShoppingCart = {
    cartProducts,
    addProduct,
  };

  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
