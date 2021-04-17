import { InMemoryCache, ApolloClient } from "@apollo/client";
import { typeDefs } from "./TypeDefs";
import link from "./Middlewares";
import initCache from "./Cache";

let client: ApolloClient<any>;

export const getApolloClient = async (): Promise<ApolloClient<any>> => {
    if (client) return client;

    const cache: InMemoryCache = await initCache();

    const apolloClient: ApolloClient<any> = new ApolloClient({
        link,
        cache,
        connectToDevTools: process.env.NODE_ENV === "development",
        typeDefs,
    });

    client = apolloClient;

    return apolloClient;
};
