import React from "react";

import { ReactComponent as BagIcon } from "../../assets/svgs/cart.svg";

// Styles
import "./cart-icon.styles.scss";

// Redux
import { connect } from "react-redux";

import { toggleCartVisibility } from "../../redux/cart/cart.actions";

const CartIcon = ({ toggleCartVisibility, cartItemCount }) => (
  <div className="cart-icon" onClick={toggleCartVisibility}>
    <BagIcon className="icon" />
    {cartItemCount === 0 ? null : (
      <div className="item-count">
        <p>{cartItemCount}</p>
      </div>
    )}
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartVisibility: () => dispatch(toggleCartVisibility()),
});

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItemCount: cartItems.length,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
