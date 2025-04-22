import i18n from "i18next";
import RU from "./Ru.json";
import EN from "./En.json";
import UZ from "./Uz.json";
import { initReactI18next } from "react-i18next";
const resources = {
  en: {
    translation: EN,
  },
  ru: {
    translation: RU,
  },
  uz: {
    translation: UZ,
  },
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "ru",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
