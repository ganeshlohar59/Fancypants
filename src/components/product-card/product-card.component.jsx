import React, { useContext } from "react";

// Styles
import "../../assets/styles/card.styles.scss";
import "./product-card.styles.scss";

// Context
import { CartContext } from "../../providers/cart/cart.provider";

// Components
import Button from "../button/button.component";

const ProductCard = ({ item }) => {
  const { name, price, imageUrl } = item;
  const { addItem } = useContext(CartContext);
  return (
    <div className="card product-card-container">
      <img src={imageUrl} alt="" />
      <Button styles="add-to-cart-btn" onClick={() => addItem(item)}>
        Add to Cart
      </Button>
      <div className="product-info">
        <h4>{name}</h4>
        <p>Rs. {price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
