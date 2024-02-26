import Wrapper from "../Wrapper";
import LinkButton from '../../../LinkButton';
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
    <LinkButton
      link={"https://github.com/wojdaSoftware"}
      buttonText={"Got to Github"}
      darkTheme={darkTheme}
      $noIcon={true}
    />
  </Wrapper>
);

export default ErrorScreen;