import { gql } from "@apollo/client";

export default gql`
    type I18n {
        lng: String!
    }

    type Query {
        i18n: I18n!
    }

    type Mutation {
        i18nUpdateLanguage(language: String!): Boolean
    }

    directive @client on FIELD
`;
