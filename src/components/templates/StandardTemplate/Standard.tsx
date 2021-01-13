import React from "react";
import { Header } from "components/organisms";

import { useQuery, useMutation } from "@apollo/client";
import { Container, Body } from "./styles";
import { getLocalUser, updateLocalUser } from "apollo/Operations/Client/Queries";

const StandardTemplate: React.FC = (props: any) => {
    const { children } = props;

    // Check user status query
    const { loading, error, data } = useQuery(getLocalUser);

    // call logout mutation
    const [Logout] = useMutation(updateLocalUser, {
        variables: { isLoggedIn: false },
    });
    // call login mutation
    const [LogIn, { loading: loginLoader }] = useMutation(updateLocalUser, {
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
