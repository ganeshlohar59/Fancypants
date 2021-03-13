import React, { Component } from "react";

// Asset Imports
import HeaderImage from "../../assets/images/window-header.png";

// Styles
import "./sign-in.styles.scss";

// Components
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

// Firebase
import { signInWithGoogle } from "../firebase/firebase.utils";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
  };

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="signin-component-container">
        <img src={HeaderImage} alt="" />
        <h2>Sign in</h2>
        <p>Sign in using your email & password</p>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            placeholder="Enter your email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
          <FormInput
            type="password"
            name="password"
            placeholder="Enter your password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <Button type="submit">Sign in</Button>

          <div className="google-auth-button" onClick={signInWithGoogle}>
            <img
              src="https://pics.freeicons.io/uploads/icons/png/37468251556105321-512.png"
              alt=""
            />
            <h4>Sign in using google account</h4>
          </div>

          <h4
            onClick={this.props.onSignUpClicked}
            className="create-account-text"
          >
            Don't have account ? Create New
          </h4>
        </form>
      </div>
    );
  }
}

export default Signin;
