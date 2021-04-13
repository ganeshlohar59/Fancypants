import React, { Component } from "react";

import "./App.css";

// Components
import Homepage from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";
import Signin from "./pages/signin/signin.component";
import Header from "./components/header/header.component";
import Checkout from "./pages/checkout/checkout.page";

// Router
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";

// Firebase
import { auth } from "./firebase/firebase.utils";

// Redux
import { connect } from "react-redux";
import { selectCurrentUser } from "./redux/user/user.selectors";

// action
import { checkUserSession } from "./redux/user/user.actions";
import { createStructuredSelector } from "reselect";

class App extends Component {
  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  displayAuthInfo = () => {
    console.log(`${auth.currentUser.displayName} -> ${auth.currentUser.email}`);
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact={true} path="/" component={Homepage} />
            <Route path="/shop" component={Shop} />
            <Route path="/signin">
              {this.props.currentUser ? <Redirect to="/" /> : <Signin />}
            </Route>
            <Route exact={true} path="/checkout" component={Checkout} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
