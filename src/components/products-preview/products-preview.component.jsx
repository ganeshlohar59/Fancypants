// Components
import ProductCard from "../product-card/product-card.component";

// Styles
import "./products-preview.styles.scss";

const ProductsPreview = ({ title, items }) => (
  <div className="product-preview-container">
    <h3 className="category-title">{title}</h3>
    <div className="products-preview-list">
      {items
        .filter((product, index) => index < 6)
        .map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default ProductsPreview;
