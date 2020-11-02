/* eslint-disable camelcase */
import gql from "graphql-tag";

export const CLIENT_LANGUAGE = gql`
    query i18n {
        i18n @client {
            lng
        }
    }
`;

export const CLIENT_UPDATE_LANGUAGE = gql`
    mutation i18nUpdateLanguage($language: String!) {
        i18nUpdateLanguage(language: $language) @client
    }
`;
