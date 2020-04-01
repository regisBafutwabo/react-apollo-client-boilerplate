import { gql } from "apollo-boost";

export default gql`
    type I18n {
        lng: String!
    }

    type query_root {
        i18n: I18n!
    }

    type mutation_root {
        i18nUpdateLanguage(language: String!): Boolean
    }

    directive @client on FIELD
`;
