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
import { auth, createUserProfile } from "./firebase/firebase.utils";

// Redux
import { connect } from "react-redux";
import { selectCurrentUser } from "./redux/user/user.selectors";

// action
import { setCurrentUser } from "./redux/user/user.actions";
import { createStructuredSelector } from "reselect";

class App extends Component {
  unsubscribeFromAuth = null;

  displayAuthInfo = () => {
    console.log(`${auth.currentUser.displayName} -> ${auth.currentUser.email}`);
  };

  // Lifecycle
  componentDidMount() {
    const { setCurrentUser } = this.props;
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
    //   if (user) {
    //     const userRef = await createUserProfile(user, user.displayName);
    //     userRef.onSnapshot((snapshot) => {
    //       setCurrentUser({
    //         id: snapshot.id,
    //         ...snapshot.data(),
    //       });
    //     });
    //   } else {
    //     setCurrentUser(user);
    //   }
    // });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

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

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
