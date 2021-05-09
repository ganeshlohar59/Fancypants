// Styles
import "./stripe-pay-button.styles.scss";

import StripeCheckout from "react-stripe-checkout";

import { convertToCurrencyString } from "../../utils/string-formatter.utils";

// Constants
const CURRENCY = "INR";
const STRIPE_PUBLISHABLE_KEY =
  "pk_test_51IWyL5SHddtkqiNU1vEtwdMqjE3Cfp1cCBIqvzogZ6T3hlEL9hBdHJBQKL6NJXMWRCuYHKf4gtBj2hJEfEdcvkf8006YCOAHcT";

const StripePayButton = ({ price }) => {
  const stripePrice = price * 100;
  const currencyString = convertToCurrencyString(price, "INR");

  const onToken = (token) => {
    console.log("Payment Successfull");
    // axios({
    //   url: "payment",
    //   method: "post",
    //   data: {
    //     amount: stripePrice,
    //     token,
    //   },
    // })
    //   .then((response) => {
    //     console.log(response.json());
    //     alert("Payment Successfull");
    //   })
    //   .catch((error) => {
    //     alert(
    //       "Something went wrong with your payment! check you card deails and try again."
    //     );
    //     console.log(JSON.parse(error));
    //   });
  };

  return (
    <StripeCheckout
      className="pay-button"
      price={stripePrice}
      currency={CURRENCY}
      stripeKey={STRIPE_PUBLISHABLE_KEY}
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
