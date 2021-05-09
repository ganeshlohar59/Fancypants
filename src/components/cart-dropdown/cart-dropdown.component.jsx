import React, { useContext } from "react";

//Providers
import { CartContext } from "../../providers/cart/cart.provider";

// Components
import Button from "../button/button.component";
import CartItemSnippet from "../cart-item-snippet/cart-item-snippet.component";
import EmptyCart from "../empty-states/empty-cart/empty-cart.component";

// Styles
import "./cart-dropdown.styles.scss";

// Router
import { withRouter } from "react-router-dom";

// Redux
import { toggleCartVisibility } from "../../redux/cart/cart.actions";

const CartDropdown = ({ history, dispatch }) => {
  const { cartItems, toggleCartVisibility } = useContext(CartContext);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          // Cart is not empty, render cart items
          cartItems.map((cartItem) => (
            <CartItemSnippet key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          // Cart is empty, render empty cart layout
          <EmptyCart />
        )}
      </div>
      {cartItems.length === 0 ? null : (
        <Button
          styles="go-to-cart"
          onClick={() => {
            history.push("/checkout");
            toggleCartVisibility();
          }}
        >
          Checkout{" • "}
          {/* {totalCartAmount.toLocaleString("en-US", {
          style: "currency",
          currency: "INR",
        })} */}
        </Button>
      )}
    </div>
  );
};

export default withRouter(CartDropdown);
