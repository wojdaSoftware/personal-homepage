import { StyledCaption, StyledContainer, StyledFooter, StyledGridContainer, StyledLink, StyledParagraph, } from "./styled";

const Footer = () => (
  <StyledFooter>
    <StyledContainer>
      <StyledCaption>
        LET'S TALK!
      </StyledCaption>
      <StyledLink href="mailto: kacper.a.wojda@gmail.com">
        kacper.a.wojda@gmail.com
      </StyledLink>
      <StyledParagraph>
        I'm always open to new projects whenever I have the time.
        If you have a website, dashboard or a mobile app in mind and need help making your ideas come to life, feel free to contact me!
      </StyledParagraph>
      <StyledGridContainer>
        <button>Lorem ipsum</button>
        <button>Lorem ipsum</button>
      </StyledGridContainer>
    </StyledContainer>
  </StyledFooter>
);

export default Footer;