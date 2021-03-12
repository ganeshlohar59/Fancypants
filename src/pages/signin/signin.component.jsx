// Styles
import "../../assets/styles/page-container.styles.scss";
import "./signin.styles.scss";

// Components
import SignIn from "../../components/sign-in/sign-in.component";

const Signin = () => (
  <div className="page-container signin-page-container">
    <SignIn />
  </div>
);

export default Signin;
