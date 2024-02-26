import { ReactComponent as GithubIcon } from '../../images/github-portfolio.svg';
import { StyledHeader, StyledSubtitle, StyledTitle } from './styled';

const SectionHeader = ({ darkTheme }) => (
  <StyledHeader $darkTheme={darkTheme}>
    <GithubIcon />
    <StyledTitle $darkTheme={darkTheme}>
      Portfolio
    </StyledTitle>
    <StyledSubtitle $darkTheme={darkTheme}>
      My recent projects
    </StyledSubtitle>
  </StyledHeader>
);

export default SectionHeader;