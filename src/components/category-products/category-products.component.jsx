// Styles
import "./category-products.styles.scss";

// Components
import ProductCard from "../../components/product-card/product-card.component";

import { connect } from "react-redux";

import { selectCategory } from "../../redux/data/data.selectors";

const CategoryProducts = ({ category }) => {
  const { title, items } = category;
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

const mapStateToProps = (state, ownProps) => ({
  category: selectCategory(ownProps.match.params.categoryId)(state),
});

export default connect(mapStateToProps)(CategoryProducts);
