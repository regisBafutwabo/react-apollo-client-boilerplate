/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { render } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";

import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import StandardTemplate from "..";
import { getLocalUser } from "apollo/Operations/Client/Queries";

describe("Standard Template", () => {
    // Mocking useLocalUpdateUserMutation and useLocalUserQuery
    const UserMock = [
        {
            request: {
                query: getLocalUser,
                variables: {
                    isLoggedIn: true,
                },
            },
        },
        {
            request: {
                query: getLocalUser,
            },
            result: {
                data: {
                    localUser: {
                        isLoggedIn: true,
                    },
                },
            },
        },
    ];

    it("should render loading ", async () => {
        const Container = render(
            <MockedProvider addTypename={false} mocks={UserMock}>
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
            <MockedProvider addTypename={false} mocks={UserMock}>
                <ThemeProvider theme={theme}>
                    <StandardTemplate />
                </ThemeProvider>
            </MockedProvider>,
        );

        expect(Container).toMatchSnapshot();
    });
});
