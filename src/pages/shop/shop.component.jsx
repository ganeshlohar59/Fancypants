import React, { Component } from "react";

// Data
import SHOP_DATA from "./shop.data";

// Components
import ProductsPreview from "../../components/products-preview/products-preview.component";

// Styles
import "./shop.styles.scss";

class Shop extends Component {
  constructor() {
    super();
    this.state = {
      shopCollection: SHOP_DATA,
    };
  }
  render() {
    const { shopCollection } = this.state;
    return (
      <div className="shop-page-container">
        {shopCollection.map(({ id, ...props }) => (
          <ProductsPreview key={id} {...props} />
        ))}
        <div></div>
      </div>
    );
  }
}

export default Shop;
