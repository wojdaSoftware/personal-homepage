import { ThemeButtonContainer, StyledThemeButtonText, StyledThemeButton } from "./styled";

const ThemeButton = () => (
  <ThemeButtonContainer>
    <StyledThemeButtonText>
      DARK MODE OFF
    </StyledThemeButtonText>
    <StyledThemeButton />
  </ThemeButtonContainer>
);

export default ThemeButton;