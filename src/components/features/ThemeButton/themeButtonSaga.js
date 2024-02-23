import { call, select, takeEvery } from 'redux-saga/effects';
import { toggleTheme, selectTheme } from './themeButtonSlice';
import { saveThemeInLocalStorage } from './themeButtonLocalStorage';

function* saveThemeInLocalStorageHandler() {
  const theme = yield select(selectTheme);
  yield call(saveThemeInLocalStorage, theme)
}

export function* themeButtonSaga() {
  yield takeEvery(toggleTheme.type, saveThemeInLocalStorageHandler);
}