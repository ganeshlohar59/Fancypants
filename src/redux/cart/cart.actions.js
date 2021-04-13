// Action Types
import { CartActionTypes as Type } from "./cart.types";

export const toggleCartVisibility = () => ({
  type: Type.TOGGLE_CART_DIALOG_VISIBILITY,
});

export const addItemToCart = (item) => ({
  type: Type.ADD_ITEM,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: Type.CLEAR_ITEM_FROM_CART,
  payload: item,
});

export const removeCartItem = (cartItem) => ({
  type: Type.REMOVE_CART_ITEM,
  payload: cartItem,
});

export function clearCart() {
  return {
    type: Type.CLEAR_CART,
  };
}
