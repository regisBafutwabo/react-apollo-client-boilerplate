import { onError } from "@apollo/client/link/error";

export const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }) => {
            console.error(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path:${path}`,
            );
            return null;
        });
    }
    if (networkError) {
        console.error(`[Network error]: ${networkError}`);
    }
});
