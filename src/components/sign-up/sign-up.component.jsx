import React, { useState } from "react";

// Asset Imports
import HeaderImage from "../../assets/images/window-header.png";

//
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { emailSignUpStart } from "../../redux/user/user.actions";
import { selectError } from "../../redux/user/user.selectors";

// Components
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

// Styles
import "../sign-in/sign-in.styles.scss";

const Signup = ({ createAccount, error, onSignInClicked }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
    confirmedPassword: "",
    displayName: "",
  });

  const { email, password, confirmedPassword, displayName } = userCredentials;

  const handleInputChange = (event) => {
    const { value, name } = event.target;
    setUserCredentials({
      ...userCredentials,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmedPassword) {
      alert("Password Don't match!");
      return;
    }

    await createAccount({ email, password, displayName });

    if (error) return;
  };

  return (
    <div className="signin-component-container">
      <img src={HeaderImage} alt="" />
      <h2>Sign up</h2>
      <p>Create new account for yourself</p>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          placeholder="Enter your name"
          value={displayName}
          onChange={handleInputChange}
        />
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
          placeholder="Set password"
          value={password}
          onChange={handleInputChange}
        />
        <FormInput
          type="password"
          name="confirmedPassword"
          placeholder="Confirm password"
          value={confirmedPassword}
          onChange={handleInputChange}
        />
        <Button type="submit">Sign up</Button>

        <h4 onClick={onSignInClicked} className="create-account-text">
          Already have account ? Sign in
        </h4>
      </form>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  error: selectError,
});

const mapDispatchToProps = (dispatch) => ({
  createAccount: ({ email, password, displayName }) =>
    dispatch(emailSignUpStart({ email, password, displayName })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
