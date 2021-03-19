// Styles
import "./cart-item.styles.scss";

// Utils
import { convertToCurrencyString } from "../../utils/string-formatter.utils";

// Component
import Button from "../../components/button/button.component";

// Redux
import { connect } from "react-redux";

import {
  addItemToCart,
  clearItemFromCart,
  removeCartItem,
} from "../../redux/cart/cart.actions";

const CartItem = ({ cartItem, clearFromCart, addItem, removeItem }) => {
  const { name, price, imageUrl, quantity } = cartItem;
  return (
    <div className="cart-item-container">
      <img className="product-image" src={imageUrl} alt="" />
      <div className="product-info">
        <h4>‎Price {convertToCurrencyString(price, "INR")}</h4>
        <p>{name}</p>
        <div className="number-widget">
          <h4 onClick={() => removeItem(cartItem)}>-</h4>
          <h4 className="quantity-text">{quantity}</h4>
          <h4 onClick={() => addItem(cartItem)}>+</h4>
          <div className="space"></div>
          <Button
            styles="remove-button"
            onClick={() => clearFromCart(cartItem)}
          >
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearFromCart: (cartItem) => dispatch(clearItemFromCart(cartItem)),
  addItem: (cartItem) => dispatch(addItemToCart(cartItem)),
  removeItem: (cartItem) => dispatch(removeCartItem(cartItem)),
});

export default connect(null, mapDispatchToProps)(CartItem);
