import React from "react";
import { Header } from "components/organisms";
import { useLocalUpdateUserMutation, useLocalUserQuery } from "generated/graphql";

import { makeVar, useMutation, useQuery } from "@apollo/client";
import { Container, Body } from "./styles";
import {
    CLIENT_GET_USER_STATE,
    CLIENT_LOG_OUT,
    CLIENT_UPDATE_USER_STATE,
} from "../../../apollo/state/user/user.queries";

const StandardTemplate: React.FC = (props: any) => {
    const { children } = props;

    // Check user status query
    const { loading, error, data } = useQuery(CLIENT_GET_USER_STATE);

    // call logout mutation
    const [Logout] = useMutation(CLIENT_LOG_OUT, {
        variables: { isLoggedIn: false },
    });
    // call login mutation
    const [LogIn, { loading: loginLoader }] = useMutation(CLIENT_UPDATE_USER_STATE, {
        variables: { isLoggedIn: true },
    });

    return (
        <Container>
            <Header
                Login={LogIn}
                Logout={Logout}
                loading={loading || loginLoader}
                error={error}
                data={data}
            />
            <Body>{children}</Body>
        </Container>
    );
};

export default StandardTemplate;
