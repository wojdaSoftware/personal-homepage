import { createSlice } from "@reduxjs/toolkit";

const themeButtonSlice = createSlice({
  name: "themeButton",
  initialState: {
    darkTheme: false
  },
  reducers: {
    toggleTheme: ({ darkTheme }) => {
      darkTheme = !darkTheme;
    }
  }
})

export const { toggleTheme } = themeButtonSlice.actions;

export const selectTheme = state => state.darkTheme;

export default themeButtonSlice.reducer;