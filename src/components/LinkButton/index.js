import { GridContainer, StyledLinkButtonText, StyledLinkButton } from "./styled";


const LinkButton = ({ link, icon, buttonText, darkTheme }) => (
  <StyledLinkButton
    href={`mailto: ${link}`}
    $darkTheme={darkTheme}
  >
    <GridContainer>
      {icon}
      <StyledLinkButtonText>{buttonText}</StyledLinkButtonText>
    </GridContainer>
  </StyledLinkButton>
);

export default LinkButton;