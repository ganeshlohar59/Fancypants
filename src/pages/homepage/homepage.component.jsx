import React from "react";

// Styled
import { HomepageContainer } from "./homepage.styles";

// Components
import CatagoriesList from "../../components/catagories-list/catagories-list.component";

const Homepage = () => (
  <HomepageContainer>
    {/* Categories List */}
    <CatagoriesList />
  </HomepageContainer>
);

export default Homepage;
