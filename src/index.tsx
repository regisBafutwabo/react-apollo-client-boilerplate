import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";

import React from "react";
import { hydrate, render } from "react-dom";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { I18nextProvider } from "react-i18next";
import { ApolloProvider } from "@apollo/client";

import App from "app";
import { getApolloClient } from "apollo";
import * as serviceWorker from "./serviceWorker";
import createI18n from "./i18n/i18n";
import "./index.css";
import "antd/dist/antd.css";
import "./storybook.css";

async function bootStrap() {
    // get the history stack of routes
    const history = createBrowserHistory();
    // get the apollo client store
    const client = await getApolloClient();
    // get the inital language from the store
    const i18n = await createI18n(client);

    // render
    const AppBundle = (
        <ApolloProvider client={client}>
            <I18nextProvider i18n={i18n}>
                <Router history={history}>
                    <App />
                </Router>
            </I18nextProvider>
        </ApolloProvider>
    );
    const rootElement = document.getElementById("root");

    if (rootElement?.hasChildNodes()) {
        hydrate(AppBundle, rootElement);
    } else {
        render(AppBundle, rootElement);
    }

    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: https://bit.ly/CRA-PWA
    serviceWorker.unregister();
}

bootStrap();
