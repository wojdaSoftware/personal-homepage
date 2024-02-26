import {
  GridItem,
  StyledDescription,
  StyledHeader,
  StyledImage,
  StyledPreTitle,
  StyledTitle,
} from "./styled";
import myself from '../../images/myself.JPG';

const Header = ({ extraHeaderContentTop, extraHeaderContentBottom, darkTheme }) => (
  <StyledHeader>
    <StyledImage src={myself} alt="Portrait photo of me." />
    {extraHeaderContentTop}
    <GridItem>
      <StyledPreTitle $darkTheme={darkTheme}>THIS IS</StyledPreTitle>
      <StyledTitle $darkTheme={darkTheme}>Kacper Wojda</StyledTitle>
      <StyledDescription $darkTheme={darkTheme}>
        An ambitious React Frontend Developer.<br />
        Always on the lookout for new opportunities!
      </StyledDescription>
      {extraHeaderContentBottom}
    </GridItem>
  </StyledHeader>
);

export default Header;