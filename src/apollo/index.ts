/* eslint-disable no-unused-vars */
import { ApolloClient, InMemoryCache, NormalizedCacheObject } from "@apollo/client";
import { errorLink } from "./Errorhandler";
import link from "./middlewares";
import initCache from "./cache";
import { resolvers } from "./state";
/**
 * If you are not using no graphql connection connection
 */
let client: ApolloClient<NormalizedCacheObject>;

const createApolloClient = async (): Promise<ApolloClient<NormalizedCacheObject>> => {
    if (client) return client;

    const cache: InMemoryCache = await initCache();

    const apolloClient: ApolloClient<NormalizedCacheObject> = new ApolloClient({
        link: errorLink.concat(link),
        cache,
        resolvers,
    });
    client = apolloClient;

    return apolloClient;
};

export default createApolloClient;
