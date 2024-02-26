import { StyledDescription, StyledLoadingIcon, StyledWrapper } from "./styled";

const LoadingScreen = ({ darkTheme }) => (
  <StyledWrapper>
    <StyledDescription $darkTheme={darkTheme}>
      Please wait, projects are being loaded...
    </StyledDescription>
    <StyledLoadingIcon $darkTheme={darkTheme}/>
  </StyledWrapper>
);

export default LoadingScreen;