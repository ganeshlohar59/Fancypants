// Styles
import "../../assets/styles/card.styles.scss";
import "./product-card.styles.scss";

const ProductCard = ({ id, name, imageurl, price }) => (
  <div className="card product-card-container">
    <img src={imageurl} alt="" />
    <div className="product-info">
      <h4>{name}</h4>
      <p>Rs. {price}</p>
    </div>
  </div>
);

export default ProductCard;
