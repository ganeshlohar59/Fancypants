// React Router Imports
import { withRouter } from "react-router-dom";

// Styles
import "./category-card.styles.scss";

const MenuItem = ({ title, imageurl, subtitle, linkurl, history, match }) => (
  <div
    className="category-card-container"
    onClick={() => history.push(`${match.url}${linkurl}`)}
  >
    <img src={imageurl} alt="" />
    <div className="info-container">
      <h4>{title}</h4>
      <p>{subtitle}</p>
    </div>
  </div>
);

export default withRouter(MenuItem);
