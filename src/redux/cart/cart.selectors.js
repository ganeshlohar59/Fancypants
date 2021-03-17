import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectVisible = createSelector(
  [selectCart],
  (cart) => cart.visible
);

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);

export const selectTotalCartAmount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedAmount, cartItem) =>
        accumulatedAmount + cartItem.quantity * cartItem.price,
      0
    )
);
