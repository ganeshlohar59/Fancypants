import React, { createContext, useState, useEffect } from "react";

import {
  addItemTocart,
  removeItemFromCart,
  clearItemFromCart,
  getCartItemsCount,
  getTotalCartAmount,
} from "./cart.utils";

export const CartContext = createContext({
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  clearItem: () => {},
  cartVisible: false,
  toggleCartVisibility: () => {},
  cartItemsCount: 0,
  totalCartAmount: 0,
});

const CartProvider = ({ children }) => {
  const [cartVisible, setCartVisibility] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [totalCartAmount, setTotalCartAmount] = useState(0);

  const toggleCartVisibility = () => setCartVisibility(!cartVisible);
  const addItem = (item) => {
    setCartItems(addItemTocart(cartItems, item));
  };
  const removeItem = (item) =>
    setCartItems(removeItemFromCart(cartItems, item));

  const clearItem = (item) => setCartItems(clearItemFromCart(cartItems, item));

  useEffect(() => {
    setCartItemsCount(getCartItemsCount(cartItems));
    setTotalCartAmount(getTotalCartAmount(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem,
        removeItem,
        clearItem,
        cartItemsCount,
        totalCartAmount,
        cartVisible,
        toggleCartVisibility,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
