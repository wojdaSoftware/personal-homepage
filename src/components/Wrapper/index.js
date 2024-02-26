import { StyledWrapper } from "./styled";

const Wrapper = ({ children, darkTheme }) => (
  <StyledWrapper $darkTheme={darkTheme}>
    {children}
  </StyledWrapper>
);

export default Wrapper;