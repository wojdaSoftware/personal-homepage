import { createSlice } from "@reduxjs/toolkit";
import {getThemeFromLocalStorage} from './themeButtonLocalStorage';

const themeButtonSlice = createSlice({
  name: "themeButton",
  initialState: {
    darkTheme: getThemeFromLocalStorage() || false
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