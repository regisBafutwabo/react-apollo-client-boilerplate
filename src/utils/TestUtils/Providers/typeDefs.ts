/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import gql from "graphql-tag";
import { ITypeDefinitions } from "graphql-tools";

const typeDefs: ITypeDefinitions = gql`
    type LocalUser {
        isLoggedIn: Boolean!
    }

    type I18n {
        lng: String!
    }

    type query_root {
        localUser: LocalUser!
        i18n: I18n!
    }

    type mutation_root {
        localUpdateUser(isLoggedIn: Boolean!): Boolean
        signOut: Boolean
        i18nUpdateLanguage(language: String!): Boolean
    }

    directive @client on FIELD
`;

export default typeDefs;
