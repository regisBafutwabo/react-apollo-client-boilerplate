import React from "react";

import logo from "assets/app/logo.svg";
import { Image, Loading } from "components/atoms";
import PageTitle from "components/atoms/PageTitle";
import { StandardTemplate } from "components/templates";
import { useTranslation } from "react-i18next";

import { Anchor, Container } from "./styles";

const Welcome = () => {
    const { t, ready } = useTranslation();

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
                    {ready ? (
                        <>{t("translation:Welcome to React")}</>
                    ) : (
                        <Loading type="skeleton" />
                    )}
                </Anchor>
            </Container>
        </StandardTemplate>
    );
};

export default Welcome;
