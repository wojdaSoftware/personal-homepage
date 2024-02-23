import { configureStore } from "@reduxjs/toolkit";
import themeButtonReducer from './components/features/ThemeButton/themeButtonSlice';

export const store = configureStore({
  reducer: {
    themeButton: themeButtonReducer,
  }
})