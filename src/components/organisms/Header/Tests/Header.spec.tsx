/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { cleanup, render } from "@testing-library/react";
import { GraphQLError } from "graphql";
import Header from "../Header";

afterEach(cleanup);

const LoginFn = jest.fn();
const LogoutFn = jest.fn();

describe("Header component", () => {
    // When data is available
    it(" should render with mocked data", async () => {
        const data = { localUser: { isLoggedIn: true } };

        const { debug } = render(
            <Header
                Login={LoginFn}
                Logout={LogoutFn}
                loading={false}
                error={undefined}
                data={data}
            />,
        );
        debug();
    });
    // When data is not yet there but its loading...
    it(" should render in loading state", async () => {
        const { debug } = render(
            <Header
                Login={LoginFn}
                Logout={LogoutFn}
                loading
                error={undefined}
                data={undefined}
            />,
        );
        debug();
    });

    // When there is an error while fetching the data
    it(" should render with mocked error data", async () => {
        const errorMsg: GraphQLError[] = [
            {
                message: "something went wrong",
                nodes: undefined,
                source: undefined,
                positions: undefined,
                path: undefined,
                originalError: undefined,
                extensions: undefined,
                locations: undefined,
                name: "error",
            },
        ];

        const { debug } = render(
            <Header
                Login={LoginFn}
                Logout={LogoutFn}
                loading={false}
                error={{
                    message: "something went wrong",
                    networkError: null,
                    extraInfo: undefined,
                    graphQLErrors: errorMsg,
                    name: "error",
                }}
                data={undefined}
            />,
        );
        debug();
    });
});
