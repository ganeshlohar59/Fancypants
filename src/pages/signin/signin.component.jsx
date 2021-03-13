import React, { Component } from "react";

// Styles
import "../../assets/styles/page-container.styles.scss";
import "./signin.styles.scss";

// Components
import SignIn from "../../components/sign-in/sign-in.component";
import Signup from "../../components/sign-up/sign-up.component";

class Signin extends Component {
  constructor() {
    super();
    this.state = {
      toggleForm: true,
    };
  }

  handleFormToggle = () => {
    this.setState((prevState) => ({
      toggleForm: !prevState.toggleForm,
    }));
  };

  render() {
    return (
      <div className="page-container signin-page-container">
        {this.state.toggleForm ? (
          <SignIn onSignUpClicked={this.handleFormToggle} />
        ) : (
          <Signup onSignInClicked={this.handleFormToggle} />
        )}
      </div>
    );
  }
}

export default Signin;
