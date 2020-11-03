/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { cleanup, render } from "@testing-library/react";
import { ApolloMockedProvider } from "utils/TestUtils/Providers/Providers";
import Header from "../Header";

afterEach(cleanup);

describe("Header component", () => {
    // When data is available
    it(" should render with mocked data", async () => {
        const { debug } = render(
            <ApolloMockedProvider>
                <Header />
            </ApolloMockedProvider>,
        );
        debug();
    });
    // When data is not yet there but its loading...
    it(" should render in loading state", async () => {
        const { debug } = render(
            <ApolloMockedProvider>
                <Header />
            </ApolloMockedProvider>,
        );
        debug();
    });

    // When there is an error while fetching the data
    it(" should render with mocked error data", async () => {
        const { debug } = render(
            <ApolloMockedProvider>
                <Header />
            </ApolloMockedProvider>,
        );
        debug();
    });
});
