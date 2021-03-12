import React, { Component } from "react";

import "./App.css";

// Components
import Homepage from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";
import Signin from "./pages/signin/signin.component";
import Header from "./components/header/header.component";

// Router
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

// Firebase
import { auth } from "./components/firebase/firebase.utils";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  // Lifecycle
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({
        currentUser: user,
      });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact={true} path="/" component={Homepage} />
            <Route path="/shop" component={Shop} />
            <Route path="/signin" component={Signin} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
