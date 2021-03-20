// Components
import ProductsPreview from "../../components/products-preview/products-preview.component";

// Redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectShopDataForPreview } from "../../redux/data/data.selectors";

const ProductCategoriesPreview = ({ shopCollection }) => {
  return (
    <div className="products-categories-list">
      {shopCollection.map(({ id, ...props }) => (
        <ProductsPreview key={id} {...props} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  shopCollection: selectShopDataForPreview,
});

export default connect(mapStateToProps, null)(ProductCategoriesPreview);
