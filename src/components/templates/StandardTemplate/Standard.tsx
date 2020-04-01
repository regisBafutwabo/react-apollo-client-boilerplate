import React from "react";
import { Header } from "components/organisms";
import { useLocalUpdateUserMutation, useLocalUserQuery } from "generated/graphql";

import { Container, Body } from "./styles";

const StandardTemplate: React.FC = (props: any) => {
    const { children } = props;

    // Check user status query
    const { loading, error, data } = useLocalUserQuery();
    // call logout mutation
    const [Logout] = useLocalUpdateUserMutation({
        variables: { isLoggedIn: false },
    });
    // call login mutation
    const [LogIn, { loading: loginLoader }] = useLocalUpdateUserMutation({
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
