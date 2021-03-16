import React from "react";

import { ReactComponent as BagIcon } from "../../assets/svgs/cart.svg";

// Styles
import "./cart-icon.styles.scss";

// Redux
import { connect } from "react-redux";

import { toggleCartVisibility } from "../../redux/cart/cart.actions";

const CartIcon = ({ toggleCartVisibility }) => (
  <div className="cart-icon" onClick={toggleCartVisibility}>
    <BagIcon className="icon" />
    <div className="item-count">
      <p>10</p>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartVisibility: () => dispatch(toggleCartVisibility()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
