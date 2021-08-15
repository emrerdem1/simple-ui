import { combineReducers, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { AuthenticationState, Language, LanguageState, User } from './types';

const initialStateLogin: AuthenticationState = {
  user: null,
};

const loginSlice = createSlice({
  name: 'auth',
  initialState: initialStateLogin,
  reducers: {
    login: (state: AuthenticationState, action: PayloadAction<User>) => {
      state = { ...initialStateLogin, user: action.payload };
      return state;
    },
    logout: () => {
      return initialStateLogin;
    },
    editUserInfo: (state: AuthenticationState, action: PayloadAction<User>) => {
      state = { ...initialStateLogin, user: action.payload };
      return state;
    },
  },
});

const initialStateLanguage: LanguageState = {
  userLanguage: Language.EN,
};

const languageSlice = createSlice({
  name: 'language',
  initialState: initialStateLanguage,
  reducers: {
    updateLanguage: (state: LanguageState, action: PayloadAction<Language>) => {
      state = { userLanguage: action.payload };
      return state;
    },
  },
});

export const { actions: loginActions, reducer: loginReducer } = loginSlice;
export const { login, logout, editUserInfo } = loginActions;
export const authentication = (state: RootState): AuthenticationState =>
  state.loginSlice;

export const { actions: languageActions, reducer: languageReducer } =
  languageSlice;
export const { updateLanguage } = languageActions;
export const language = (state: RootState): LanguageState =>
  state.languageSlice;

const rootReducer = combineReducers({
  loginSlice: loginReducer,
  languageSlice: languageReducer,
});
export default rootReducer;
