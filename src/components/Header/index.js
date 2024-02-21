import {
  StyledHeader,
  StyledImage,
  StyledPreTitle,
  StyledTitle,
} from "./styled";
import myself from '../../images/myself.JPG'

const Header = ({ extraHeaderContent }) => (
  <StyledHeader>
    <StyledImage src={myself} alt="Portrait photo of me." />
    <div>
      {extraHeaderContent}
      <StyledPreTitle>THIS IS</StyledPreTitle>
      <StyledTitle>Kacper Wojda</StyledTitle>
    </div>
  </StyledHeader>
);

export default Header;