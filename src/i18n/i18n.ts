import i18next from 'i18next';
import english from 'i18n/locales/en.json';
import arabic from 'i18n/locales/ar.json';
import {initReactI18next} from 'react-i18next';

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lang: 'en',
  fallbackLng: 'en',
  resources: {
    en: english,
    ar: arabic,
  },
  react: {
    useSuspense: false,
  },
});

export default i18next;
