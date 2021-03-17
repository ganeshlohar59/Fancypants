// Styles
import "./cart-item.styles.scss";

// Utils
import { convertToCurrencyString } from "../../utils/string-formatter.utils";

// Component
import Button from "../../components/button/button.component";

const CartItem = ({ cartItem: { name, price, imageUrl, quantity } }) => (
  <div className="cart-item-container">
    <img className="product-image" src={imageUrl} alt="" />
    <div className="product-info">
      <h4>
        Price ‎ ‎<strong>{convertToCurrencyString(price, "INR")}</strong>
      </h4>
      <p>{name}</p>
      <div className="number-widget">
        <h4>-</h4>
        <h4 className="quantity-text">{quantity}</h4>
        <h4>+</h4>
        <div className="space"></div>
        <Button styles="remove-button">Remove</Button>
      </div>
    </div>
  </div>
);

export default CartItem;
