import React from "react";

// Components
import Button from "../button/button.component";
import CartItemSnippet from "../cart-item-snippet/cart-item-snippet.component";

// Redux
import { connect } from "react-redux";

// Styles
import "./cart-dropdown.styles.scss";
import { addItem } from "../../redux/cart/cart.utils";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItemSnippet key={cartItem.id} cartItem={cartItem} />
      ))}
    </div>
    <Button styles="go-to-cart">Go to Cart</Button>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps, null)(CartDropdown);
