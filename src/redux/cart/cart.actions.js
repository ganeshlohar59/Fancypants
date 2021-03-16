// Action Types
import { CartActionTypes as Type } from "./cart.types";

export const toggleCartVisibility = () => ({
  type: Type.TOGGLE_CART_DIALOG_VISIBILITY,
});

export const addItemToCart = (item) => ({
  type: Type.ADD_ITEM,
  payload: item,
});
