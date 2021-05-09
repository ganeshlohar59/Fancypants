import React, { useContext } from "react";

// Styles
import "./category-products.styles.scss";

// Components
import ProductCard from "../../components/product-card/product-card.component";

// Context
import ShopContext from "../../contexts/shop/shop.context";

const CategoryProducts = ({ match }) => {
  const context = useContext(ShopContext);
  const shopData = context[match.params.categoryId];
  const { title, items } = shopData;
  return (
    <div>
      <h3 className="title">{title}</h3>
      <div className="products-list">
        {items.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
