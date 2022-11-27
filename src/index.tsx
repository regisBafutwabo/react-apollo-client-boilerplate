import "./index.css";
import "./storybook.css";

import React from "react";

import { getApolloClient } from "apollo";
import App from "app";
import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next";

import { ApolloProvider } from "@apollo/client";

import createI18n from "./i18n/i18n";
import * as serviceWorker from "./serviceWorker";

async function bootStrap() {
    // get the apollo client store
    const client = await getApolloClient();
    // get the inital language from the store
    const i18n = await createI18n(client);

    const rootElement = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

    const AppBundle = (
        <ApolloProvider client={client}>
            <I18nextProvider i18n={i18n}>
                <App />
            </I18nextProvider>
        </ApolloProvider>
    );

    rootElement.render(AppBundle);

    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: https://bit.ly/CRA-PWA
    serviceWorker.unregister();
}

bootStrap();
