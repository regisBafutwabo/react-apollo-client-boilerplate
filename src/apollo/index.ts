/* eslint-disable no-unused-vars */
import { ApolloClient, InMemoryCache, NormalizedCacheObject } from "@apollo/client";
import initCache from "./cache";
/**
 * If you are not using no graphql connection connection
 */
let client: ApolloClient<NormalizedCacheObject>;

export default async function createApolloClient(): Promise<
    ApolloClient<NormalizedCacheObject>
> {
    if (client) return client;

    const cache: InMemoryCache = await initCache();

    const apolloClient: ApolloClient<NormalizedCacheObject> = new ApolloClient({
        cache,
        connectToDevTools: true,
    });

    client = apolloClient;

    return apolloClient;
}
