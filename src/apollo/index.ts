/* eslint-disable no-unused-vars */
import { NormalizedCacheObject, InMemoryCache, ApolloClient } from "apollo-boost";
import { errorLink } from "./Errorhandler";
import link from "./middlewares";
import initCache from "./cache";
import { resolvers } from "./state";
/**
 * If you are not using no graphql connection connection
 */
const createApolloClient = async (): Promise<ApolloClient<NormalizedCacheObject>> => {
    const cache: InMemoryCache = await initCache();
    const apolloClient: ApolloClient<NormalizedCacheObject> = new ApolloClient({
        link: errorLink.concat(link),
        cache,
        resolvers,
    });

    return apolloClient;
};

export default createApolloClient;
