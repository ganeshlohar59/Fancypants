import React, { useState } from "react";

// Asset Imports
import HeaderImage from "../../assets/images/window-header.png";

// Styles
import "./sign-in.styles.scss";

// Redux
import { connect } from "react-redux";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";

import { selectError } from "../../redux/user/user.selectors";

// Components
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { createStructuredSelector } from "reselect";

const Signin = ({
  signInWithGoogle,
  signInWithEmailPassword,
  onSignUpClicked,
}) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email === "" && password === "") return;
    await signInWithEmailPassword({ email, password });
  };

  const handleInputChange = (event) => {
    const { value, name } = event.target;
    setUserCredentials({
      ...userCredentials,
      [name]: value,
    });
  };

  return (
    <div className="signin-component-container">
      <img src={HeaderImage} alt="" />
      <h2>Sign in</h2>
      <p>Sign in using your email & password</p>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleInputChange}
        />
        <FormInput
          type="password"
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={handleInputChange}
        />
        <Button type="submit">Sign in</Button>

        <div className="google-auth-button" onClick={signInWithGoogle}>
          <img
            src="https://pics.freeicons.io/uploads/icons/png/37468251556105321-512.png"
            alt=""
          />
          <h4>Sign in using google account</h4>
        </div>

        <h4 onClick={onSignUpClicked} className="create-account-text">
          Don't have account ? Create New
        </h4>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signInWithGoogle: () => dispatch(googleSignInStart()),
  signInWithEmailPassword: ({ email, password }) =>
    dispatch(emailSignInStart({ email, password })),
});

const mapStateToProps = createStructuredSelector({
  error: selectError,
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
