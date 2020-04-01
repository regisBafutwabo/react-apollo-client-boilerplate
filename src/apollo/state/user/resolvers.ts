/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import { LocalUser, LocalUpdateUserMutationVariables } from "generated/graphql";
import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient, { Resolvers } from "apollo-client";
import { CLIENT_GET_USER_STATE } from "./user.queries";

export const userStateResolvers: Resolvers = {
    Mutation: {
        localUpdateUser: (
            _parent: any,
            args: LocalUpdateUserMutationVariables,
            context: any,
        ): null => {
            const client: ApolloClient<InMemoryCache> = context?.client;
            const userState: LocalUser | undefined = client.readQuery<{
                localUser: LocalUser;
            }>({
                query: CLIENT_GET_USER_STATE,
            })?.localUser;

            client.writeData({
                data: {
                    localUser: {
                        ...userState,
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
