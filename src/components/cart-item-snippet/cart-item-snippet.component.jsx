// Styles
import "./cart-item-snippet.styles.scss";

const CartItemSnippet = ({ cartItem: { imageUrl, name, price, quantity } }) => {
  return (
    <div className="cart-item-snippet-wrapper">
      <img src={imageUrl} alt="" />
      <div className="cart-item-info">
        <h4>{name}</h4>
        <p>
          {quantity} x {price} Rs.
        </p>
      </div>
    </div>
  );
};

export default CartItemSnippet;
