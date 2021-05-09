// Adds Item to cart and set quantity if added mutiple times
export const addItemTocart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (cartItemToAdd.quantity >= 10) {
    return [...cartItems];
  }

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

// Clears Item from cart
export const clearItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }
};

// Reduce quantity or remove item from cart if it's last
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const getCartItemsCount = (cartItems) => {
  return cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
    0
  );
};

export const getTotalCartAmount = (cartItems) => {
  return cartItems.reduce(
    (accumulatedAmount, cartItem) =>
      accumulatedAmount + cartItem.quantity * cartItem.price,
    0
  );
};
