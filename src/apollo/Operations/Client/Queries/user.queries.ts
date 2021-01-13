import gql from "graphql-tag";

export const getLocalUser = gql`
    query LocalUser {
        localUser @client {
            isLoggedIn
        }
    }
`;

export const updateLocalUser = gql`
    mutation UpdateLocalUser($isLoggedIn: Boolean!) {
        UpdateLocalUser(isLoggedIn: $isLoggedIn) @client
    }
`;

export const localUserSignOut = gql`
    mutation SignOut {
        signOut @client
    }
`;
