// Action Types
import { CartActionTypes as Type } from "./cart.types";

const INITIAL_STATE = {
  visible: false,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Type.TOGGLE_CART_DIALOG_VISIBILITY:
      return {
        ...state,
        visible: !state.visible,
      };

    default:
      return state;
  }
};

export default cartReducer;
