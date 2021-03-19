// Styles
import "./empty-cart.styles.scss";

// Asset Import
import EmptyCartIcon from "../../../assets/images/empty-cart-pink.png";

const EmptyCart = () => {
  return (
    <div className="empty-cart-layout">
      <img src={EmptyCartIcon} alt="" />
      <h4>Your cart is empty</h4>
      <p>Add Something to your cart, it feels very lite!</p>
    </div>
  );
};

export default EmptyCart;
