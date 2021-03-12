import React from "react";

// Styles
import "./homepage.styles.scss";

// Components
import CatagoriesList from "../../components/catagories-list/catagories-list.component";
import Header from "../../components/header/header.component";

const Homepage = () => (
  <div className="homepage">
    <Header />
    <div className="contents">
      <CatagoriesList />
    </div>
  </div>
);

export default Homepage;
