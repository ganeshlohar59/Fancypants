import React from "react";

// Components
import Button from "../button/button.component";
import CartItemSnippet from "../cart-item-snippet/cart-item-snippet.component";
import EmptyCart from "../empty-states/empty-cart/empty-cart.component";

// Redux
import { connect } from "react-redux";
import {
  selectCartItems,
  selectTotalCartAmount,
} from "../../redux/cart/cart.selectors";

// Selectors
import { createStructuredSelector } from "reselect";

// Styles
import "./cart-dropdown.styles.scss";

// Router
import { withRouter } from "react-router-dom";

// Redux
import { toggleCartVisibility } from "../../redux/cart/cart.actions";

const CartDropdown = ({ cartItems, totalCartAmount, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        // Cart is not empty, render cart items
        cartItems.map((cartItem) => (
          <CartItemSnippet key={cartItem.id} cartItem={cartItem} />
        ))
      ) : (
        // Cart is empty, render empty cart layout
        <EmptyCart />
      )}
    </div>
    {cartItems.length === 0 ? null : (
      <Button
        styles="go-to-cart"
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartVisibility());
        }}
      >
        Checkout{" • "}
        {totalCartAmount.toLocaleString("en-US", {
          style: "currency",
          currency: "INR",
        })}
      </Button>
    )}
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalCartAmount: selectTotalCartAmount,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
