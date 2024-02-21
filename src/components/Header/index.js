import {
  GridContainer,
  HireMeButton,
  HireMeButtonIcon,
  HireMeButtonText,
  StyledDescription,
  StyledHeader,
  StyledImage,
  StyledPreTitle,
  StyledTitle,
} from "./styled";
import myself from '../../images/myself.JPG';
import mailIcon from '../../images/mail-icon.png';

const Header = ({ extraHeaderContent }) => (
  <StyledHeader>
    <StyledImage src={myself} alt="Portrait photo of me." />
    <div>
      {extraHeaderContent}
      <StyledPreTitle>THIS IS</StyledPreTitle>
      <StyledTitle>Kacper Wojda</StyledTitle>
      <StyledDescription>
        An ambitious React Frontend Developer.<br />
        Always on the lookout for new opportunities!
      </StyledDescription>
      <HireMeButton href="mailto: kacper.a.wojda@gmail.com">
        <GridContainer>
          <HireMeButtonIcon src={mailIcon} alt="A letter symbol" />
          <HireMeButtonText>Hire Me</HireMeButtonText>
        </GridContainer>
      </HireMeButton>
    </div>
  </StyledHeader>
);

export default Header;