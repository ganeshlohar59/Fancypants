import { createContext } from "react";

const CartContext = createContext({
  cartVisible: false,
  toggleCartVisibility: () => {},
});

export default CartContext;
