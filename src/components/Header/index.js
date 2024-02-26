import {
  GridContainer,
  GridItem,
  HireMeButton,
  HireMeButtonText,
  StyledDescription,
  StyledHeader,
  StyledImage,
  StyledPreTitle,
  StyledTitle,
} from "./styled";
import myself from '../../images/myself.JPG';
import { ReactComponent as MailIcon } from '../../images/mail-icon.svg';

const Header = ({ extraHeaderContent, darkTheme }) => (
  <StyledHeader>
    <StyledImage src={myself} alt="Portrait photo of me." />
    {extraHeaderContent}
    <GridItem>
      <StyledPreTitle $darkTheme={darkTheme}>THIS IS</StyledPreTitle>
      <StyledTitle $darkTheme={darkTheme}>Kacper Wojda</StyledTitle>
      <StyledDescription $darkTheme={darkTheme}>
        An ambitious React Frontend Developer.<br />
        Always on the lookout for new opportunities!
      </StyledDescription>
      <HireMeButton
        href="mailto: kacper.a.wojda@gmail.com"
        $darkTheme={darkTheme}
      >
        <GridContainer>
          <MailIcon />
          <HireMeButtonText>Hire Me</HireMeButtonText>
        </GridContainer>
      </HireMeButton>
    </GridItem>
  </StyledHeader>
);

export default Header;