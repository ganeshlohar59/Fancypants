// Styles
import "./checkout.styles.scss";
import "../../assets/styles/page-container.styles.scss";

// Redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectTotalCartAmount,
  selectCartItemsCount,
} from "../../redux/cart/cart.selectors";

// Utils
import { convertToCurrencyString } from "../../utils/string-formatter.utils";

// Components
import CartItem from "../../components/cart-item/cart-item.component";
import EmptyCart from "../../components/empty-states/empty-cart/empty-cart.component";
import StripePayButton from "../../components/stripe-pay-button/stripe-pay-button.component";

const Checkout = ({ cartItems, totalAmount, totalCartItems }) => (
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
      <table>
        <tr>
          <td>Total Amount</td>
          <td>
            <strong>{convertToCurrencyString(totalAmount, "INR")}</strong>
          </td>
        </tr>
        <tr>
          <td>Delivery Charge</td>
          <td>
            <strong>{convertToCurrencyString(0, "INR")}</strong>
          </td>
        </tr>
        <tr>
          <td>Items</td>
          <td>
            <strong>{totalCartItems}</strong>
          </td>
        </tr>
      </table>
      {/* <strong>
        <h4>
          Total Amount{" "}
          <strong>{convertToCurrencyString(totalAmount, "INR")}</strong>
        </h4>
      </strong> */}
      <StripePayButton price={totalAmount} />
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalAmount: selectTotalCartAmount,
  totalCartItems: selectCartItemsCount,
});

export default connect(mapStateToProps, null)(Checkout);
