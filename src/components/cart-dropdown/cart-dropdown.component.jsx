import React from "react";

// Components
import Button from "../button/button.component";

// Styles
import "./cart-dropdown.styles.scss";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items"></div>
    <Button styles="go-to-cart">Go to Cart</Button>
  </div>
);

export default CartDropdown;
