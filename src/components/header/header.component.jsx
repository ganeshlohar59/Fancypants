// Styled
import {
  HeaderContainer,
  LogoContainer,
  TopNavigationContainer,
  NavItemList,
  NavItem,
} from "./header.styles";

// Firebase
import { auth } from "../../firebase/firebase.utils";

//
import { Link } from "react-router-dom";

// Redux
import { connect } from "react-redux";

// Selectors
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectVisible } from "../../redux/cart/cart.selectors";

// Components
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = ({ currentUser, visible }) => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Link to="/">
          <h3>fancypants</h3>
        </Link>
      </LogoContainer>
      <TopNavigationContainer>
        <NavItemList>
          <Link className="link" to="/shop">
            <NavItem>Shop</NavItem>
          </Link>
          <Link className="link" to="/contact">
            <NavItem>Contact</NavItem>
          </Link>

          {currentUser ? (
            <NavItem
              onClick={() => {
                auth.signOut();
              }}
            >
              Sign out
            </NavItem>
          ) : (
            <Link className="link" to="/signin">
              <NavItem>Sign in</NavItem>
            </Link>
          )}
        </NavItemList>
      </TopNavigationContainer>
      <CartIcon />
      {visible ? <CartDropdown /> : null}
    </HeaderContainer>
  );
};

// Mapping state to reducer
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  visible: selectVisible,
});

export default connect(mapStateToProps)(Header);
