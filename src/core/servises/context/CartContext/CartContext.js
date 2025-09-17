import React, { createContext, useContext, useReducer } from "react";

import { cartReducer } from "./CartReducers";

const Cart = createContext();

const CartContext = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    cart: [],
  });

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default CartContext;

export const CartState = () => {
  return useContext(Cart);
};
