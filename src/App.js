import React, { Component } from "react";

import "./App.css";

// Components
import Homepage from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";
import Signin from "./pages/signin/signin.component";
import Header from "./components/header/header.component";

// Router
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";

// Firebase
import { auth, createUserProfile } from "./components/firebase/firebase.utils";

// Redux
import { connect } from "react-redux";

// action
import { setCurrentUser } from "./redux/user/user.actions";

class App extends Component {
  unsubscribeFromAuth = null;

  displayAuthInfo = () => {
    console.log(`${auth.currentUser.displayName} -> ${auth.currentUser.email}`);
  };

  // Lifecycle
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfile(user, user.displayName);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(user);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  switchToShopPageAfterSigninSuccessful = () => {};

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
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
