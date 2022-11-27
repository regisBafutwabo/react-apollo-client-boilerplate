/* eslint-disable no-console */
import React, { ReactNode } from "react";

import { getLocalUser } from "apollo/Operations/Client/Queries";
import { Header } from "components/organisms";
import { AuthService } from "services";

import { useQuery } from "@apollo/client";

import { Body, Container } from "./styles";

const StandardTemplate = ({ children }: { children: ReactNode }) => {
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
