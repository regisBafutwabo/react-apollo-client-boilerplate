import { gql } from "apollo-boost";

export default gql`
    type I18n {
        lng: String!
    }

    extend type Query {
        i18n: I18n!
    }

    extend type Mutation {
        i18nUpdateLanguage(language: String!): Boolean
    }

    directive @client on FIELD
`;
