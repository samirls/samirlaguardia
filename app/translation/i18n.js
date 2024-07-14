import i18n from "i18next"
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector';
import { messages } from "./languages"

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: false,
        defaultNS: ['translations'],
        fallbackLng: "en-US",
        lng: "en-US",
        ns: ["translations"],
        interpolation: {
            escapeValue: false,
          },
        resources: messages
    })

    export { i18n }