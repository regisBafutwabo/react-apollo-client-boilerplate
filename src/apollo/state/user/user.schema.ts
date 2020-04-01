import { gql } from "apollo-boost";

export default gql`
    type LocalUser {
        isLoggedIn: Boolean!
    }

    extend type Query {
        localUser: LocalUser!
    }

    extend type Mutation {
        localUpdateUser(isLoggedIn: Boolean!): Boolean
        signOut: Boolean
    }

    directive @client on FIELD
`;
