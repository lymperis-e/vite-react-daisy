import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import gr from "@/locale/el.json";
import en from "@/locale/en.json";

// Get the selected locale from local storage
const getLocaleFromStorage = () => {
  return localStorage.getItem("selectedLocale") || "gr"; // Default to "gr" if not found
};

// Set the selected locale to local storage
const setLocaleToStorage = (locale: string) => {
  localStorage.setItem("selectedLocale", locale);
};

i18n.use(initReactI18next).init({
  resources: {
    gr: gr,
    en: en,
  },
  fallbackLng: ["gr", "en"],
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

// Set the i18n language from local storage
i18n.changeLanguage(getLocaleFromStorage());

// Subscribe to language change events and update local storage
i18n.on("languageChanged", (lng: string) => {
  setLocaleToStorage(lng);
});

//@ts-ignore
window.i18n = i18n;

export default i18n;
