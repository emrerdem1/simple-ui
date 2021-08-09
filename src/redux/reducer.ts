import { combineReducers, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { AuthenticationState, Language, ThemeColor, ThemeState } from './types';

const initialStateLogin: AuthenticationState = {
  user: null,
};

const loginSlice = createSlice({
  name: 'auth',
  initialState: initialStateLogin,
  reducers: {},
});

const initialStateTheme: ThemeState = {
  mode: ThemeColor.LIGHT,
  language: Language.TR,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: initialStateTheme,
  reducers: {},
});

export const { actions: loginActions, reducer: loginReducer } = loginSlice;
export const authentication = (state: RootState) => state.loginSlice;

export const { actions: themeActions, reducer: themeReducer } = themeSlice;
export const theme = (state: RootState) => state.themeSlice;

const rootReducer = combineReducers({
  loginSlice: loginReducer,
  themeSlice: themeReducer,
});
export default rootReducer;
