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
        .map(({ id, ...props }) => (
          <ProductCard key={id} {...props} />
        ))}
    </div>
  </div>
);

export default ProductsPreview;
