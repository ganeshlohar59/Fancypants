// Action Types
import { CartActionTypes as Type } from "./cart.types";

// Utils
import { addItem, clearItemFromCart, removeItemFromCart } from "./cart.utils";

const INITIAL_STATE = {
  visible: false,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Type.TOGGLE_CART_DIALOG_VISIBILITY:
      return {
        ...state,
        visible: !state.visible,
      };

    case Type.ADD_ITEM:
      return {
        ...state,
        cartItems: addItem(state.cartItems, action.payload),
      };

    case Type.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: clearItemFromCart(state.cartItems, action.payload),
      };

    case Type.REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
