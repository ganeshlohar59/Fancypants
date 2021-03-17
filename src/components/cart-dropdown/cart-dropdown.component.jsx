import React from "react";

// Components
import Button from "../button/button.component";
import CartItemSnippet from "../cart-item-snippet/cart-item-snippet.component";

// Redux
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";

// Styles
import "./cart-dropdown.styles.scss";

import EmptyCartIcon from "../../assets/images/empty-cart-pink.png";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length === 0 ? (
        <div className="empty-cart-layout">
          <img src={EmptyCartIcon} alt="" />
          <h4>Your cart is empty</h4>
          <p>Add Something to your cart, it feels very lite!</p>
        </div>
      ) : (
        cartItems.map((cartItem) => (
          <CartItemSnippet key={cartItem.id} cartItem={cartItem} />
        ))
      )}
    </div>
    {cartItems.length === 0 ? null : (
      <Button styles="go-to-cart">Checkout</Button>
    )}
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps, null)(CartDropdown);
