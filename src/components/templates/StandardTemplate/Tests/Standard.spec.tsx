/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { render, wait } from "@testing-library/react";
import { MockedProvider } from "@apollo/react-testing";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import StandardTemplate from "..";

describe("Standard Template", () => {
    // Mocking useLocalUpdateUserMutation and useLocalUserQuery

    it("should render loading ", async () => {
        const Container = render(
            <MockedProvider addTypename={false}>
                <ThemeProvider theme={theme}>
                    <StandardTemplate />
                </ThemeProvider>
            </MockedProvider>,
        );
        // loading should show loading component
        expect(Container).toMatchSnapshot();
    });

    it("should render `logged In` state", async () => {
        const Container = render(
            <MockedProvider addTypename={false}>
                <ThemeProvider theme={theme}>
                    <StandardTemplate />
                </ThemeProvider>
            </MockedProvider>,
        );
        await wait();
        expect(Container).toMatchSnapshot();
    });
});
