// Styles
import "./stripe-pay-button.styles.scss";

import StripeCheckout from "react-stripe-checkout";

import { convertToCurrencyString } from "../../utils/string-formatter.utils";

const StripePayButton = ({ price }) => {
  const stripePrice = price * 100;
  const publishableKey =
    "pk_test_51IWyL5SHddtkqiNU1vEtwdMqjE3Cfp1cCBIqvzogZ6T3hlEL9hBdHJBQKL6NJXMWRCuYHKf4gtBj2hJEfEdcvkf8006YCOAHcT";

  const currencyString = convertToCurrencyString(price, "INR");

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful, your order is placed ");
  };

  return (
    <StripeCheckout
      className="pay-button"
      price={stripePrice}
      currency="INR"
      stripeKey={publishableKey}
      panelLabel="Pay Now"
      name="Fancypants"
      billingAddress
      shippingAddress
      description={`Your total is ${currencyString}`}
      token={onToken}
    />
  );
};

export default StripePayButton;
