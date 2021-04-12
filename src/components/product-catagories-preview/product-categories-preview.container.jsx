import { connect } from "react-redux";
import { compose } from "redux";

import { createStructuredSelector } from "reselect";

import { selectIsShopDataFetching } from "../../redux/data/data.selectors";

import ProductCategoriesPreview from "./product-categories-preview.component";

import withSpinner from "../with-spinner/with-spinner.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsShopDataFetching,
});

const ProductCategoriesPreviewContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(ProductCategoriesPreview);

export default ProductCategoriesPreviewContainer;
