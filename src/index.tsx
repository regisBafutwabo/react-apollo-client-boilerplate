/* eslint-disable import/extensions */
import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";
import React from "react";
import { hydrate, render } from "react-dom";
import "./index.css";
import { Router } from "react-router-dom";
// eslint-disable-next-line import/no-extraneous-dependencies
import { createBrowserHistory } from "history";
import createApolloClient from "apollo";
import { I18nextProvider } from "react-i18next";
import App from "app";
import { ApolloProvider } from "@apollo/client";
import * as serviceWorker from "./serviceWorker";
import "antd/dist/antd.css";
import "./storybook.css";
import createI18n from "./i18n";

async function bootStrap() {
    // get the history stack of routes
    const history = createBrowserHistory();
    // get the apollo client store
    const client = await createApolloClient();
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
