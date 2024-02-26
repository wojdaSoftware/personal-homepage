import { StyledGithubIcon, StyledHeader, StyledSubtitle, StyledTitle } from './styled';

const SectionHeader = ({ darkTheme }) => (
  <StyledHeader $darkTheme={darkTheme}>
    <StyledGithubIcon $darkTheme={darkTheme} />
    <StyledTitle $darkTheme={darkTheme}>
      Portfolio
    </StyledTitle>
    <StyledSubtitle $darkTheme={darkTheme}>
      My recent projects
    </StyledSubtitle>
  </StyledHeader>
);

export default SectionHeader;