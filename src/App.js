import React, { useEffect, useState } from "react";

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

import CurrentUserContext from "./contexts/current-user/current-user.context";

const App = () => {
  // State
  const INITIAL_STATE = {
    currentUser: null,
  };
  const [state, setState] = useState(INITIAL_STATE);
  const { currentUser } = state;

  // Lifecycle Hooks
  useEffect(() => {
    const detachAuthListener = auth.onAuthStateChanged(async (currentUser) => {
      if (currentUser) {
        const userRef = await createUserProfile(currentUser);
        userRef.onSnapshot((snapshot) => {
          setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      }
      setState({ currentUser });
    });

    return () => {
      detachAuthListener();
    };
  }, []);

  return (
    <div className="App">
      <Router>
        <CurrentUserContext.Provider value={currentUser}>
          <Header />
        </CurrentUserContext.Provider>
        <Switch>
          <Route exact={true} path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin">
            {currentUser ? <Redirect to="/" /> : <Signin />}
          </Route>
          <Route exact={true} path="/checkout" component={Checkout} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
