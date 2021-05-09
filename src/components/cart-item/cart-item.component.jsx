import React, { useContext } from "react";

// Styles
import "./cart-item.styles.scss";

// Utils
import { convertToCurrencyString } from "../../utils/string-formatter.utils";

// Context
import { CartContext } from "../../providers/cart/cart.provider";

// Component
import Button from "../../components/button/button.component";

const CartItem = ({ cartItem }) => {
  const { name, price, imageUrl, quantity } = cartItem;
  const { addItem, removeItem, clearItem } = useContext(CartContext);
  return (
    <div className="cart-item-container">
      <img className="product-image" src={imageUrl} alt="" />
      <div className="product-info">
        <h4>‎{name}</h4>
        <p>Price • {convertToCurrencyString(price, "INR")}</p>
        <div className="number-widget">
          <h4 onClick={() => removeItem(cartItem)}>-</h4>
          <h4 className="quantity-text">{quantity}</h4>
          <h4 onClick={() => addItem(cartItem)}>+</h4>
          <div className="space"></div>
          <Button styles="remove-button" onClick={() => clearItem(cartItem)}>
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
