import i18next from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { FC, PropsWithChildren } from "react"
import { I18nextProvider } from "react-i18next"
import translationEn from "../assets/i18next-translations/en.json"
import translationZhHans from "../assets/i18next-translations/zh-hans.json"
import translationZhHant from "../assets/i18next-translations/zh-hant.json"

const i18nInstance = i18next.createInstance()

i18nInstance.use(LanguageDetector).init({
    interpolation: {
        escapeValue: false
    },
    fallbackLng: "en",
    resources: {
        en: {
            translation: translationEn
        },
        "zh-Hans": {
            translation: translationZhHans
        },
        "zh-CN": {
            translation: translationZhHans
        },
        "zh-SG": {
            translation: translationZhHans
        },
        "zh-Hant": {
            translation: translationZhHant
        },
        "zh-HK": {
            translation: translationZhHant
        },
        "zh-MO": {
            translation: translationZhHant
        },
        "zh-TW": {
            translation: translationZhHant
        }
    }
})

export const I18nProvider: FC<PropsWithChildren> = ({ children }) => {
    return <I18nextProvider i18n={i18nInstance}>{children}</I18nextProvider>
}
