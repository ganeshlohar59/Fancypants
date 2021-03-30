import { ImpulseSpinner } from "react-spinners-kit";

// Styled
import { SpinnerContainer } from "./with-spinner.styles";

const withSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <SpinnerContainer>
      <ImpulseSpinner frontColor="#ff5d5d" backColor="#F7F5F6" />
    </SpinnerContainer>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default withSpinner;
