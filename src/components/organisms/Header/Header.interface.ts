import { ApolloError } from "@apollo/client";

export namespace HeaderProps {
    export interface IProps {
        Login: any;
        Logout: any;
        loading: boolean;
        error: ApolloError | undefined;
        data: any;
    }
}
