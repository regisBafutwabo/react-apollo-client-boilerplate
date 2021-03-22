import React from "react";
import { render } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { ApolloProvider } from "@apollo/client";
import { getApolloClient } from "apollo";
import createI18n from "i18n/i18n";
import { I18nextProvider } from "react-i18next";
import { shallow } from "enzyme";
import App from "../App";

describe("App Component", () => {
    test("renders App Component", async () => {
        const history = createBrowserHistory();
        const client = await getApolloClient();
        const i18n = await createI18n(client);

        const { getByText } = render(
            <ApolloProvider client={client}>
                <I18nextProvider i18n={i18n}>
                    <Router history={history}>
                        <App />
                    </Router>
                </I18nextProvider>
            </ApolloProvider>,
        );

        const linkElement = getByText(/Loading.../i) || getByText(/Welcome to React/i);
        expect(linkElement).toBeInTheDocument();
    });
});
