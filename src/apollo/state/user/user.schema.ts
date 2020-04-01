import { gql } from "apollo-boost";

export default gql`
    type LocalUser {
        isLoggedIn: Boolean!
    }

    type query_root {
        localUser: LocalUser!
    }

    type mutation_root {
        localUpdateUser(isLoggedIn: Boolean!): Boolean
        signOut: Boolean
    }

    directive @client on FIELD
`;
