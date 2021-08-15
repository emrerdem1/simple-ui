import i18n from 'i18next';
import translationEN from './en/translation.json';
import translationTR from './tr/translation.json';
import { initReactI18next } from 'react-i18next';

export const resources = {
  en: {
    translation: translationEN,
  },
  tr: {
    translation: translationTR,
  },
} as const;

i18n.use(initReactI18next).init({
  lng: 'en',
  resources,
});
