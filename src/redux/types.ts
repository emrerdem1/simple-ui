export interface User {
  name: string;
  email: string;
  title?: string;
  password?: string;
}

export interface AuthenticationState {
  user: User | null;
}

export enum Language {
  TR = 'tr',
  EN = 'en',
}

export interface LanguageState {
  userLanguage: Language;
}
