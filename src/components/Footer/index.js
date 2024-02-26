import {
  StyledCaption,
  StyledContainer,
  StyledFooter,
  StyledGridContainer,
  StyledLink,
  StyledParagraph,
  StyledGithubIcon,
  StyledLinkedInIcon
} from "./styled";

const Footer = ({ darkTheme }) => (
  <StyledFooter>
    <StyledContainer>
      <StyledCaption $darkTheme={darkTheme}>
        LET'S TALK!
      </StyledCaption>
      <StyledLink
        href="mailto: kacper.a.wojda@gmail.com"
        $darkTheme={darkTheme}
      >
        kacper.a.wojda@gmail.com
      </StyledLink>
      <StyledParagraph $darkTheme={darkTheme}>
        I'm always open to new projects whenever I have the time.
        If you have a website, dashboard or a mobile app in mind and need help making your ideas come to life, feel free to contact me!
      </StyledParagraph>
      <StyledGridContainer>
        <a href="https://github.com/wojdaSoftware" target="_blank" rel="noopener">
          <StyledGithubIcon $darkTheme={darkTheme} />
        </a>
        <a href="https://www.linkedin.com/in/kacper-wojda-9a7a62299/" target="_blank" rel="noopener">
          <StyledLinkedInIcon $darkTheme={darkTheme} />
        </a>
      </StyledGridContainer>
    </StyledContainer>
  </StyledFooter>
);

export default Footer;