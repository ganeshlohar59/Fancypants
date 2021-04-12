import React, { Component } from "react";

// Asset Imports
import HeaderImage from "../../assets/images/window-header.png";

// Components
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

// Styles
import "../sign-in/sign-in.styles.scss";
import { auth, createUserProfile } from "../../firebase/firebase.utils";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmedPassword: "",
    };
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmedPassword } = this.state;

    if (password !== confirmedPassword) {
      alert("Password Don't match!");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfile(user, displayName);
    } catch (error) {
      console.log(`failed to create user profile ${error.message}`);
    }
  };

  render() {
    return (
      <div className="signin-component-container">
        <img src={HeaderImage} alt="" />
        <h2>Sign up</h2>
        <p>Create new account for yourself</p>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            placeholder="Enter your name"
            value={this.state.displayName}
            onChange={this.handleInputChange}
          />
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
            placeholder="Set password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <FormInput
            type="password"
            name="confirmedPassword"
            placeholder="Confirm password"
            value={this.state.confirmedPassword}
            onChange={this.handleInputChange}
          />
          <Button type="submit">Sign up</Button>

          <h4
            onClick={this.props.onSignInClicked}
            className="create-account-text"
          >
            Already have account ? Sign in
          </h4>
        </form>
      </div>
    );
  }
}

export default Signup;
