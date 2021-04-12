import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { selectIsShopDataLoaded } from "../../redux/data/data.selectors";
import withSpinner from "../with-spinner/with-spinner.component";
import CategoryProducts from "./category-products.component";

import { compose } from "redux";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsShopDataLoaded(state),
});

const CategoryProductsContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CategoryProducts);

export default CategoryProductsContainer;
