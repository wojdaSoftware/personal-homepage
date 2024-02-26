import Wrapper from "../Wrapper";
import { StyledDescription, StyledLoadingIcon, StyledWrapper } from "./styled";

const LoadingScreen = ({ darkTheme }) => (
  <Wrapper>
    <StyledDescription $darkTheme={darkTheme}>
      Please wait, projects are being loaded...
    </StyledDescription>
    <StyledLoadingIcon $darkTheme={darkTheme} />
  </Wrapper>
);

export default LoadingScreen;