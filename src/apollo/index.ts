import { InMemoryCache, ApolloClient } from "@apollo/client";
import { typeDefs } from "./TypeDefs";
import { LocalResolvers } from "./Operations/Client/Mutations";
import link from "./Middlewares";
import initCache from "./Cache";
/**
 * If you are not using no graphql connection connection
 */
let client: ApolloClient<any>;

export const getApolloClient = async (): Promise<ApolloClient<any>> => {
    if (client) return client;

    const cache: InMemoryCache = await initCache();

    const apolloClient: ApolloClient<any> = new ApolloClient({
        link,
        cache,
        connectToDevTools: process.env.NODE_ENV === "development",
        typeDefs,
        resolvers: LocalResolvers,
    });

    return apolloClient;
};
