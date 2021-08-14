interface User {
  name: string;
  email: string;
  password: string;
}

export interface AuthenticationState {
  user: User | null;
}

export enum ThemeColor {
  LIGHT,
  DARK,
}

export enum Language {
  TR,
  ENG,
}

export interface ThemeState {
  mode: ThemeColor;
  language: Language;
}
