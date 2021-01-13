import { ApolloClient, Resolvers, InMemoryCache } from "@apollo/client";
import { getLocalUser } from "../../Queries";

export const userStateResolvers: Resolvers = {
    Mutation: {
        UpdateLocalUser: (_parent: any, args: any, context: any): null => {
            const client: ApolloClient<InMemoryCache> = context?.client;

            client.writeQuery({
                query: getLocalUser,
                data: {
                    localUser: {
                        ...args,
                    },
                },
            });

            return null;
        },

        signOut: async (_parent: any, args: any, context: any) => {
            const client: ApolloClient<InMemoryCache> = context?.client;
            await client.resetStore();
            return null;
        },
    },
};
