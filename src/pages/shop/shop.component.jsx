import React, { Component } from "react";

// Component
import ProductCategoriesPreview from "../../components/product-catagories-preview/product-categories-preview.component";
import CategoryProducts from "../../components/category-products/category-products.component";
import withSpinner from "../../components/with-spinner/with-spinner.component";

// Styles
import "./shop.styles.scss";

// Router
import { Route } from "react-router-dom";

import { connect } from "react-redux";

import { downloadShopData } from "../../redux/data/data.actions";

// Firestore
import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../components/firebase/firebase.utils";

const ProductCategoriesPreviewWithSpinner = withSpinner(
  ProductCategoriesPreview
);

const CategoryProductsWithSpinner = withSpinner(CategoryProducts);

class Shop extends Component {
  // State
  state = {
    isLoading: true,
  };

  detachListener = null;
  //
  componentDidMount() {
    const { downloadShopData } = this.props;
    // Fetching list of products
    const collectionRef = firestore.collection("products");
    this.detachListener = collectionRef.onSnapshot(async (snapshot) => {
      const categoryMap = convertCollectionSnapshotToMap(snapshot);
      downloadShopData(categoryMap);
      this.setState({
        isLoading: false,
      });
    });
    //
  }

  render() {
    const { match } = this.props;
    const { isLoading } = this.state;
    return (
      <div className="shop-page-container">
        <Route
          exact={true}
          path={`${match.path}`}
          render={(props) => (
            <ProductCategoriesPreviewWithSpinner
              isLoading={isLoading}
              {...props}
            />
          )}
        />
        <Route
          exact={true}
          path={`${match.path}/:categoryId`}
          render={(props) => (
            <CategoryProductsWithSpinner isLoading={isLoading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  downloadShopData: (shopDataMap) => dispatch(downloadShopData(shopDataMap)),
});

export default connect(null, mapDispatchToProps)(Shop);
