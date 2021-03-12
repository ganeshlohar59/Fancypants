// Styles
import "./form-input.styles.scss";

const FormInput = ({ type, name, placeholder, value, onChange }) => (
  <input
    className="form-input"
    type={type}
    name={name}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
  />
);

export default FormInput;
