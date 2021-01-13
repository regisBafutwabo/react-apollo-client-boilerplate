import { InMemoryCache, Resolvers, ApolloClient } from "@apollo/client";
import { getLanguage } from "../../Queries";

export const i18nResolvers: Resolvers = {
    Mutation: {
        updateLanguage: (_parent: any, args: any, context: any): null => {
            const client: ApolloClient<InMemoryCache> = context?.client;
            const { language } = args;

            client.writeQuery({
                query: getLanguage,
                data: {
                    i18n: {
                        lng: language,
                    },
                },
            });
            return null;
        },
    },
};
