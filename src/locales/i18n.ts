import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import en from './en/en.json'
import bg from './bg/bg.json'

export const defaultNS = 'en'
export const resources = {
  en: {
    translation: en
  },
  bg: {
    translation: bg
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false
    }
  })

export default i18n
