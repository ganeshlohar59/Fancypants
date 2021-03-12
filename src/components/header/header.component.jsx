// Styles
import "./header.styles.scss";

// SVGs
import CartIcon from "../../assets/svgs/cart.svg";

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <h3>fancypants</h3>
    </div>
    <nav className="top-navigation">
      <ul>
        <li>
          <h4>Shop</h4>
        </li>
        <li>
          <h4>Contact</h4>
        </li>
        <li>
          <h4>Sign in</h4>
        </li>
        <img src={CartIcon} alt="" />
      </ul>
    </nav>
  </div>
);

export default Header;
