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

const Header = ({ extraHeaderContent }) => (
  <StyledHeader>
    <StyledImage src={myself} alt="Portrait photo of me." />
    {extraHeaderContent}
    <GridItem>
      <StyledPreTitle>THIS IS</StyledPreTitle>
      <StyledTitle>Kacper Wojda</StyledTitle>
      <StyledDescription>
        An ambitious React Frontend Developer.<br />
        Always on the lookout for new opportunities!
      </StyledDescription>
      <HireMeButton href="mailto: kacper.a.wojda@gmail.com">
        <GridContainer>
          <MailIcon />
          <HireMeButtonText>Hire Me</HireMeButtonText>
        </GridContainer>
      </HireMeButton>
    </GridItem>
  </StyledHeader>
);

export default Header;