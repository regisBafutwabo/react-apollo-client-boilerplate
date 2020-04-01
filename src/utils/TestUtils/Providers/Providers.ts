/* eslint-disable import/no-extraneous-dependencies */
import {
    createApolloErrorProvider,
    createApolloMockedProvider,
    createApolloLoadingProvider,
} from "apollo-mocked-provider";
import { ApolloProvider } from "@apollo/react-hooks";
import typeDefs from "./typeDefs";

export const ApolloMockedProvider = createApolloMockedProvider(typeDefs, {
    provider: ApolloProvider,
});
export const ApolloErrorProvider = createApolloErrorProvider({ provider: ApolloProvider });
export const ApolloLoadingProvider = createApolloLoadingProvider({
    provider: ApolloProvider,
});
