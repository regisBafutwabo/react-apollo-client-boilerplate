/* eslint-disable import/extensions */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import { InMemoryCache, Resolvers, ApolloClient } from "@apollo/client";
import { I18n, I18nUpdateLanguageMutationVariables } from "generated/graphql";
import { CLIENT_LANGUAGE } from "./i18n.queries";

export const i18nResolvers: Resolvers = {
    Mutation: {
        i18nUpdateLanguage: (
            _parent: any,
            args: I18nUpdateLanguageMutationVariables,
            context: any,
        ): null => {
            const client: ApolloClient<InMemoryCache> = context?.client;
            const { language } = args;

            client.writeQuery({
                query: CLIENT_LANGUAGE,
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
