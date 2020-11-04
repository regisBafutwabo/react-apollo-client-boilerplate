/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { render, wait } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import {
    CLIENT_UPDATE_USER_STATE,
    CLIENT_GET_USER_STATE,
} from "apollo/state/user/user.queries";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import StandardTemplate from "..";

describe("Standard Template", () => {
    // Mocking useLocalUpdateUserMutation and useLocalUserQuery
    const UserMock = [
        {
            request: {
                query: CLIENT_UPDATE_USER_STATE,
                variables: {
                    isLoggedIn: true,
                },
            },
        },
        {
            request: {
                query: CLIENT_GET_USER_STATE,
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
        await wait();
        expect(Container).toMatchSnapshot();
    });
});
