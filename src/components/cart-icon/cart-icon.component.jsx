import React, { useContext } from "react";

import { ReactComponent as BagIcon } from "../../assets/svgs/cart.svg";

// Styles
import "./cart-icon.styles.scss";

// Context
import { CartContext } from "../../providers/cart/cart.provider";

const CartIcon = () => {
  const { toggleCartVisibility, cartItemsCount } = useContext(CartContext);

  return (
    <div className="cart-icon" onClick={toggleCartVisibility}>
      <BagIcon className="icon" />
      {cartItemsCount === 0 ? null : (
        <div className="item-count">
          <p>{cartItemsCount}</p>
        </div>
      )}
    </div>
  );
};

export default CartIcon;
