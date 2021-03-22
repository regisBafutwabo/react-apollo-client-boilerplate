import { onError } from "@apollo/client/link/error";

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
