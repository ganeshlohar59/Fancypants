// Styles
import "./checkout.styles.scss";
import "../../assets/styles/page-container.styles.scss";

// Redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors";

// Components
import CartItem from "../../components/cart-item/cart-item.component";
import EmptyCart from "../../components/empty-states/empty-cart/empty-cart.component";

const Checkout = ({ cartItems }) => (
  <div className="page-container checkout-page">
    <div className="cart-items-container">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))
      ) : (
        <EmptyCart />
      )}
    </div>
    <div className="pricing-details">
      <strong>
        <h4>Pricing Details</h4>
      </strong>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps, null)(Checkout);
