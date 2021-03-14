import React from "react";

// Styles
import "./homepage.styles.scss";

// Components
import CatagoriesList from "../../components/catagories-list/catagories-list.component";

const Homepage = () => (
  <div className="homepage">
    <div className="contents">
      {/* Categories List */}
      <CatagoriesList />
    </div>
  </div>
);

export default Homepage;
