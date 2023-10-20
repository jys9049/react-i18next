import i18next from "i18next";
import en from "./locales/en/translation.json";
import ko from "./locales/ko/translation.json";
import { initReactI18next } from "react-i18next";

const resources = {
  en: { translation: en },
  ko: { translation: ko },
};

i18next.use(initReactI18next).init({
  lng: "ko",
  fallbackLng: "en",
  debug: false,
  resources,
  interpolation: {
    escapeValue: false,
  },
  compatibilityJSON: "v4",
});

export default i18next;
