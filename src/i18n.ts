/* eslint-disable camelcase */
/* eslint-disable max-len */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import { CLIENT_LANGUAGE } from "apollo/state/i18n/i18n.queries";
import i18n, { InitOptions } from "i18next";
import { initReactI18next } from "react-i18next";
import { ApolloClient } from "@apollo/client";
import translationEN from "./locales/en/translation.json";
import translationKR from "./locales/ko/translation.json";

async function createI18n(apolloClient: ApolloClient<any>) {
    // get the initial language in the apollo store
    const { lng } = apolloClient.readQuery({ query: CLIENT_LANGUAGE })?.i18n;

    const options: InitOptions = {
        // the translations
        resources: {
            en: {
                translation: translationEN,
            },
            ko: {
                translation: translationKR,
            },
        },
        ns: ["translation"],
        defaultNS: "translation",
        debug: false,
        fallbackLng: lng,
        lng,
        keySeparator: false,
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    };

    await i18n.use(initReactI18next).init(options);

    return i18n;
}

export default createI18n;
