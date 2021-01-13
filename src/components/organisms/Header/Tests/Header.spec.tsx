import React from "react";
import { cleanup, render } from "@testing-library/react";
import { GraphQLError } from "graphql";
import { ApolloProvider } from "@apollo/client";
import { getApolloClient } from "apollo";
import Header from "../Header.impl";

afterEach(cleanup);

const LoginFn = jest.fn();
const LogoutFn = jest.fn();

describe("Header component", () => {
    // When data is available
    it(" should render with mocked data", async () => {
        const client = await getApolloClient();
        const data = { localUser: { isLoggedIn: true } };

        const { debug } = render(
            <ApolloProvider client={client}>
                <Header
                    Login={LoginFn}
                    Logout={LogoutFn}
                    loading={false}
                    error={undefined}
                    data={data}
                />
            </ApolloProvider>,
        );
        debug();
    });
    // When data is not yet there but its loading...
    it(" should render in loading state", async () => {
        const client = await getApolloClient();
        const { debug } = render(
            <ApolloProvider client={client}>
                <Header
                    Login={LoginFn}
                    Logout={LogoutFn}
                    loading
                    error={undefined}
                    data={undefined}
                />
            </ApolloProvider>,
        );
        debug();
    });

    // When there is an error while fetching the data
    it(" should render with mocked error data", async () => {
        const client = await getApolloClient();
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
            <ApolloProvider client={client}>
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
                />
            </ApolloProvider>,
        );
        debug();
    });
});
