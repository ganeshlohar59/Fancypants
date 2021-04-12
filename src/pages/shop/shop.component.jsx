import React, { Component } from "react";

// Component
import CategoryProductsContainer from "../../components/category-products/category-products.container";
import ProductCategoriesPreviewContainer from "../../components/product-catagories-preview/product-categories-preview.container";

// Styles
import "./shop.styles.scss";

// Router
import { Route } from "react-router-dom";

import { connect } from "react-redux";

// Actions Import
import { fetchShopDataStart } from "../../redux/data/data.actions";

class Shop extends Component {
  // Lifecycle Functions
  componentDidMount() {
    const { fetchShopData } = this.props;
    fetchShopData();
  }

  // UI Render
  render() {
    const { match } = this.props;

    return (
      <div className="shop-page-container">
        <Route
          exact={true}
          path={`${match.path}`}
          component={ProductCategoriesPreviewContainer}
        />
        <Route
          exact={true}
          path={`${match.path}/:categoryId`}
          component={CategoryProductsContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchShopData: () => dispatch(fetchShopDataStart()),
});

export default connect(null, mapDispatchToProps)(Shop);
