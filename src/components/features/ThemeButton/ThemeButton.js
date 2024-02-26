import { useDispatch } from "react-redux";
import { ThemeButtonContainer, StyledThemeButtonText, StyledThemeButton, StyledIconContainer, StyledSunIcon } from "./styled";
import { toggleTheme } from "./themeButtonSlice";


const ThemeButton = ({ darkTheme }) => {
  const dispatch = useDispatch();

  return (
    <ThemeButtonContainer>
      <StyledThemeButtonText $darkTheme={darkTheme}>
        DARK MODE {darkTheme ? "ON" : "OFF"}
      </StyledThemeButtonText>
      <StyledThemeButton
        onClick={() => dispatch(toggleTheme())}
        $darkTheme={darkTheme}
      >
        <StyledIconContainer $darkTheme={darkTheme}>
          <StyledSunIcon $darkTheme={darkTheme} />
        </StyledIconContainer>
      </StyledThemeButton>
    </ThemeButtonContainer>
  );
}

export default ThemeButton;