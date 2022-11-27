import { ApolloError } from "@apollo/client";

export type HeaderProps = {
    Login: any;
    Logout: any;
    loading: boolean;
    error: ApolloError | undefined;
    data: any;
};
