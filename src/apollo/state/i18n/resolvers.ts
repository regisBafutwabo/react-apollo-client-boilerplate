/* eslint-disable import/extensions */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import ApolloClient, { Resolvers } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { I18n, I18nUpdateLanguageMutationVariables } from "generated/graphql";
import { ClIENT_LANGUAGE } from "./i18n.queries";

export const i18nResolvers: Resolvers = {
    Mutation: {
        i18nUpdateLanguage: (
            _parent: any,
            args: I18nUpdateLanguageMutationVariables,
            context: any,
        ): null => {
            const client: ApolloClient<InMemoryCache> = context?.client;
            const { language } = args;
            const i18nState: I18n | undefined = client.readQuery<{
                i18n: I18n;
            }>({
                query: ClIENT_LANGUAGE,
            })?.i18n;
            client.writeData({
                data: {
                    i18n: {
                        ...i18nState,
                        lng: language,
                    },
                },
            });
            return null;
        },
    },
};
