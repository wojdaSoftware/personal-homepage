import {all} from "redux-saga/effects";
import { themeButtonSaga } from "./components/features/ThemeButton/themeButtonSaga";

export default function* rootSaga() {
  yield all([
    themeButtonSaga(),
  ]);
}