import React, { useContext } from "react";

// Styles
import "./checkout.styles.scss";
import "../../assets/styles/page-container.styles.scss";

// Context
import { CartContext } from "../../providers/cart/cart.provider";

// Utils
import { convertToCurrencyString } from "../../utils/string-formatter.utils";

// Components
import CartItem from "../../components/cart-item/cart-item.component";
import EmptyCart from "../../components/empty-states/empty-cart/empty-cart.component";
import StripePayButton from "../../components/stripe-pay-button/stripe-pay-button.component";

const Checkout = () => {
  const { cartItems, totalCartAmount, cartItemsCount } = useContext(
    CartContext
  );
  return (
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
              <strong>{convertToCurrencyString(totalCartAmount, "INR")}</strong>
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
              <strong>{cartItemsCount}</strong>
            </td>
          </tr>
        </table>

        <StripePayButton price={totalCartAmount} />
      </div>
    </div>
  );
};

export default Checkout;
