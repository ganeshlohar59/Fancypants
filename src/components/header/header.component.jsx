// Styles
import "./header.styles.scss";

// Firebase
import { auth } from "../firebase/firebase.utils";

//
import { Link } from "react-router-dom";

// Redux
import { connect } from "react-redux";

// Components
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = ({ currentUser, visible }) => (
  <div className="header">
    <div className="logo-container">
      <Link to="/" className="link">
        <h3>fancypants</h3>
      </Link>
    </div>
    <nav className="top-navigation">
      <ul>
        <Link className="link" to="/shop">
          <h4>Shop</h4>
        </Link>
        <Link className="link" to="/contact">
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
        <CartIcon />
      </ul>
    </nav>
    {visible ? <CartDropdown /> : null}
  </div>
);

// Mapping state to reducer
const mapStateToProps = ({ user: { currentUser }, cart: { visible } }) => ({
  currentUser,
  visible,
});

export default connect(mapStateToProps)(Header);
