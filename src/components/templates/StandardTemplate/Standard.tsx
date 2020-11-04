import React from "react";
import { Header } from "components/organisms";
// import { useLocalUpdateUserMutation } from "generated/graphql";

import { useQuery, useMutation } from "@apollo/client";
import { CLIENT_GET_USER_STATE } from "apollo/state/user";
import { Container, Body } from "./styles";
import { CLIENT_UPDATE_USER_STATE } from "../../../apollo/state/user/user.queries";

const StandardTemplate: React.FC = (props: any) => {
    const { children } = props;

    // Check user status query
    const { loading, error, data } = useQuery(CLIENT_GET_USER_STATE);

    // call logout mutation
    const [Logout] = useMutation(CLIENT_UPDATE_USER_STATE, {
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
