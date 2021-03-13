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

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  displayAuthInfo = () => {
    console.log(`${auth.currentUser.displayName} -> ${auth.currentUser.email}`);
  };

  // Lifecycle
  componentDidMount() {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfile(user, user.displayName);
        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      } else {
        this.setState({ currentUser: user });
      }
    });
  }

  componentWillUnmount() {
    // this.unsubscribeFromAuth();
  }

  switchToShopPageAfterSigninSuccessful = () => {};

  render() {
    return (
      <div className="App">
        <Router>
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact={true} path="/" component={Homepage} />
            <Route path="/shop" component={Shop} />
            <Route path="/signin">
              {this.state.currentUser ? <Redirect to="/" /> : <Signin />}
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
