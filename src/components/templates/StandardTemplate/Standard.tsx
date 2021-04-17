import React from "react";
import { Header } from "components/organisms";

import { useQuery } from "@apollo/client";
import { getLocalUser } from "apollo/Operations/Client/Queries";
import { AuthService } from "services";
import { Container, Body } from "./styles";

const StandardTemplate: React.FC = (props: any) => {
    const { children } = props;

    const { loading, error, data } = useQuery(getLocalUser);

    const login = async () => {
        try {
            await AuthService.login();
        } catch (err) {
            console.error(err);
        }
    };

    const logout = async () => {
        try {
            await AuthService.logout();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Container>
            <Header
                Login={login}
                Logout={logout}
                loading={loading}
                error={error}
                data={data}
            />
            <Body>{children}</Body>
        </Container>
    );
};

export default StandardTemplate;
