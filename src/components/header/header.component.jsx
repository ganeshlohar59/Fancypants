// Styles
import "./header.styles.scss";

// SVGs
import CartIcon from "../../assets/svgs/cart.svg";

// Firebase
import { auth } from "../firebase/firebase.utils";

//
import { Link } from "react-router-dom";

// Redux
import { connect } from "react-redux";

const Header = ({ currentUser }) => (
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

        <img src={CartIcon} alt="" />
      </ul>
    </nav>
  </div>
);

// Mapping state to reducer
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
