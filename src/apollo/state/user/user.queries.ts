import gql from "graphql-tag";

export const CLIENT_GET_USER_STATE = gql`
    query localUser {
        localUser @client {
            isLoggedIn
        }
    }
`;

export const CLIENT_UPDATE_USER_STATE = gql`
    mutation localUpdateUser($isLoggedIn: Boolean!) {
        localUpdateUser(isLoggedIn: $isLoggedIn) @client
    }
`;

export const CLIENT_LOG_OUT = gql`
    mutation SignOut {
        signOut @client
    }
`;
