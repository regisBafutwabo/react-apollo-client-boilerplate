/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import { onError } from "apollo-link-error";

export const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
        graphQLErrors.map(({ message, extensions }) => {
            console.error(
                `[GraphQL error]: Message: ${message}, Location: ${extensions?.code}`,
            );
            return null;
        });
    }
    if (networkError) {
        console.error(`[Network error]: ${networkError}`);
    }
});
