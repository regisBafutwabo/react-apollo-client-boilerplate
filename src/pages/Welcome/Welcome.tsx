/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import React from "react";
import logo from "assets/app/logo.svg";
import { useTranslation } from "react-i18next";
import { Image, Loading } from "components/atoms";
import { StandardTemplate } from "components/templates";
import { RouteComponentProps } from "react-router-dom";
import PageTitle from "components/atoms/PageTitle";
import { Container, Anchor } from "./styles";

interface IProps extends RouteComponentProps {}

const Welcome: React.FC<IProps> = () => {
    const { t, ready } = useTranslation("translation", { useSuspense: false });

    return (
        <StandardTemplate>
            <PageTitle Title="Welcome - React Boilerplate" />
            <Container className="App">
                <Image
                    image={logo}
                    height="40vmin"
                    alt="logo"
                    styles={{
                        animation: "App-logo-spin infinite 20s linear",
                    }}
                />
                <Anchor href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    {ready ? <>{t("Welcome to React")}</> : <Loading type="skeleton" />}
                </Anchor>
            </Container>
        </StandardTemplate>
    );
};

export default Welcome;
