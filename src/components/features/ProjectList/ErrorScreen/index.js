import Wrapper from "../Wrapper";
import { StyledDangerIcon, StyledDescription, StyledDisclaimer } from "./styled";

const ErrorScreen = ({ darkTheme }) => (
  <Wrapper>
    <StyledDangerIcon $darkTheme={darkTheme} />
    <StyledDisclaimer $darkTheme={darkTheme}>
      Oops! Something went wrong...
    </StyledDisclaimer>
    <StyledDescription $darkTheme={darkTheme}>
      Sorry, failed to load Github projects.<br />
      You can check them directly on Github.
    </StyledDescription>
  </Wrapper>
);

export default ErrorScreen;