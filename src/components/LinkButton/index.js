import { GridContainer, StyledLinkButtonText, StyledLinkButton } from "./styled";


const LinkButton = ({ link, icon, buttonText, darkTheme }) => (
  <StyledLinkButton
    href={link}
    $darkTheme={darkTheme}
    target="_blank"
    rel="noopener"
  >
    <GridContainer icon={icon}>
      {icon}
      <StyledLinkButtonText>{buttonText}</StyledLinkButtonText>
    </GridContainer>
  </StyledLinkButton>
);

export default LinkButton;