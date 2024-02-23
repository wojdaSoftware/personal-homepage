import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import themeButtonReducer from './components/features/ThemeButton/themeButtonSlice';
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    themeButton: themeButtonReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga);