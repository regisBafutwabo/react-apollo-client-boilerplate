/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import { LocalUpdateUserMutationVariables } from "generated/graphql";
import { ApolloClient, Resolvers, InMemoryCache } from "@apollo/client";
import { CLIENT_GET_USER_STATE } from "./user.queries";

export const userStateResolvers: Resolvers = {
    Mutation: {
        localUpdateUser: (
            _parent: any,
            args: LocalUpdateUserMutationVariables,
            context: any,
        ): null => {
            const client: ApolloClient<InMemoryCache> = context?.client;

            client.writeQuery({
                query: CLIENT_GET_USER_STATE,
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
