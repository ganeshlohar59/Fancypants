import React, { Component } from "react";

// Styles
import "./catagories-list.styles.scss";

// Components
import CategoryCard from "../category-card/category-card.component";

export default class CatagoriesList extends Component {
  constructor() {
    super();
    this.state = {
      catagories: [
        {
          id: 1,
          title: "Mens",
          subtitle: "Shirts, T-Shirts, Casuals",
          imageurl:
            "https://images.unsplash.com/photo-1540924782561-3fc182603b86?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
          linkurl: "mens",
        },
        {
          id: 1,
          title: "Womens",
          subtitle: "Tops, Kurtas, and more",
          imageurl:
            "https://images.unsplash.com/photo-1560253034-1a9c043ffb28?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
          linkurl: "",
        },
        {
          id: 1,
          title: "Kids",
          subtitle: "T-Shirts, Pants, and more",
          imageurl:
            "https://images.unsplash.com/photo-1541580621-cb65cc53084b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
          linkurl: "",
        },
        {
          id: 1,
          title: "Home & Living",
          subtitle: "Electronics, and more",
          imageurl:
            "https://images.unsplash.com/photo-1596162954151-cdcb4c0f70a8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",
          linkurl: "",
        },
      ],
    };
  }
  render() {
    return (
      <div className="catagories-list">
        {this.state.catagories.map(
          ({ id, title, subtitle, imageurl, linkurl }) => (
            <CategoryCard
              key={id}
              title={title}
              subtitle={subtitle}
              imageurl={imageurl}
              linkurl={linkurl}
            />
          )
        )}
      </div>
    );
  }
}
