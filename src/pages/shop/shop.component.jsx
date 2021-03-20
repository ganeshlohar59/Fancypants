// Component
import ProductCategoriesPreview from "../../components/product-catagories-preview/product-categories-preview.component";
import CategoryProducts from "../../components/category-products/category-products.component";

// Styles
import "./shop.styles.scss";

// Router
import { Route } from "react-router-dom";

const Shop = ({ match }) => {
  return (
    <div className="shop-page-container">
      <Route
        exact={true}
        path={`${match.path}`}
        component={ProductCategoriesPreview}
      />
      <Route
        exact={true}
        path={`${match.path}/:categoryId`}
        component={CategoryProducts}
      />
    </div>
  );
};

export default Shop;
