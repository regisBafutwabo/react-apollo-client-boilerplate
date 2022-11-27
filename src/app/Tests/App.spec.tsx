import React from "react";

import { getApolloClient } from "apollo";
import createI18n from "i18n/i18n";
import { I18nextProvider } from "react-i18next";

import { ApolloProvider } from "@apollo/client";
import { render } from "@testing-library/react";

import App from "../index";

describe("App Component", () => {
    test("renders App Component", async () => {
        const client = await getApolloClient();
        const i18n = await createI18n(client);

        const { getByText } = render(
            <ApolloProvider client={client}>
                <I18nextProvider i18n={i18n}>
                    <App />
                </I18nextProvider>
            </ApolloProvider>,
        );

        const linkElement = getByText(/Loading.../i) || getByText(/Welcome to React/i);
        expect(linkElement).toBeInTheDocument();
    });
});
