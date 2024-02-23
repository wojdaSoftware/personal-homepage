import { createSlice } from "@reduxjs/toolkit";

const themeButtonSlice = createSlice({
  name: "themeButton",
  initialState: {
    darkTheme: false
  },
  reducers: {
    toggleTheme: (state) => {
      state.darkTheme = !state.darkTheme;
    }
  }
})

const selectThemeState = state => state.themeButton;

export const { toggleTheme } = themeButtonSlice.actions;

export const selectTheme = state => selectThemeState(state).darkTheme;

export default themeButtonSlice.reducer;