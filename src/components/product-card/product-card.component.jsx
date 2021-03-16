// Styles
import "../../assets/styles/card.styles.scss";
import "./product-card.styles.scss";

// Components
import Button from "../button/button.component";

// Reduc
import { connect } from "react-redux";
import { addItemToCart } from "../../redux/cart/cart.actions";

const ProductCard = ({ item, addItemToCart }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="card product-card-container">
      <img src={imageUrl} alt="" />
      <Button styles="add-to-cart-btn" onClick={() => addItemToCart(item)}>
        Add to Cart
      </Button>
      <div className="product-info">
        <h4>{name}</h4>
        <p>Rs. {price}</p>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(ProductCard);
