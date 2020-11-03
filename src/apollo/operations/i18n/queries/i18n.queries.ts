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
    mutation updateLanguage($language: String!) {
        updateLanguage(language: $language) @client
    }
`;
