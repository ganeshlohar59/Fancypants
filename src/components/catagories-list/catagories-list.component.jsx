// Styles
import "./catagories-list.styles.scss";

// Components
import CategoryCard from "../category-card/category-card.component";

// Redux
import { connect } from "react-redux";

import { selectDataCategories } from "../../redux/data/data.selectors";

import { createStructuredSelector } from "reselect";

const CatagoriesList = ({ categories }) => {
  return (
    <div className="catagories-list">
      {categories.map(({ id, title, subtitle, imageurl, linkurl }) => (
        <CategoryCard
          key={id}
          title={title}
          subtitle={subtitle}
          imageurl={imageurl}
          linkurl={linkurl}
        />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  categories: selectDataCategories,
});

export default connect(mapStateToProps, null)(CatagoriesList);
