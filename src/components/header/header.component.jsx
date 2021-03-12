// Styles
import "./header.styles.scss";

// SVGs
import CartIcon from "../../assets/svgs/cart.svg";

// Firebase
import { auth } from "../firebase/firebase.utils";

//
import { Link } from "react-router-dom";

const Header = ({ currentUser }) => (
  <div className="header">
    <div className="logo-container">
      <h3>fancypants</h3>
    </div>
    <nav className="top-navigation">
      <ul>
        <Link className="link" to="/shop">
          <h4>Shop</h4>
        </Link>
        <Link className="link" to="/">
          <h4>Contact</h4>
        </Link>

        {currentUser ? (
          <h4
            onClick={() => {
              auth.signOut();
            }}
          >
            Sign out
          </h4>
        ) : (
          <Link className="link" to="/signin">
            <h4>Sign in</h4>
          </Link>
        )}

        <img src={CartIcon} alt="" />
      </ul>
    </nav>
  </div>
);

export default Header;
