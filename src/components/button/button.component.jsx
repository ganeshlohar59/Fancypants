// Styles
import "./button.styles.scss";

const Button = ({ children, styles, ...props }) => (
  <button className={`button ${styles}`} {...props}>
    {children}
  </button>
);

export default Button;
