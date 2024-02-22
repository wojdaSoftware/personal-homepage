import { ReactComponent as GithubIcon } from '../../images/github-portfolio.svg';
import { StyledHeader, StyledSubtitle, StyledTitle } from './styled';

const SectionHeader = () => (
  <StyledHeader>
    <GithubIcon />
    <StyledTitle>
      Portfolio
    </StyledTitle>
    <StyledSubtitle>
      My recent projects
    </StyledSubtitle>
  </StyledHeader>
);

export default SectionHeader;