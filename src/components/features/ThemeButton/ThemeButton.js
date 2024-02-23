import { useDispatch, useSelector } from "react-redux";
import { ThemeButtonContainer, StyledThemeButtonText, StyledThemeButton } from "./styled";
import { selectTheme, toggleTheme } from "./themeButtonSlice";

const ThemeButton = () => {
  const dispatch = useDispatch();
  const darkTheme = useSelector(selectTheme);

  return (
    <ThemeButtonContainer>
      <StyledThemeButtonText>
        DARK MODE {darkTheme ? "ON" : "OFF"}
      </StyledThemeButtonText>
      <StyledThemeButton onClick={() => dispatch(toggleTheme())} />
    </ThemeButtonContainer>
  );
}

export default ThemeButton;