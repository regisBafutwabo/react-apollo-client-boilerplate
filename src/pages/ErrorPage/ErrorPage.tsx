/* eslint-disable no-unused-vars */
import React from "react";
import { StandardTemplate } from "components/templates";
import { Button } from "antd";
import { PageTitle } from "components/atoms";
import { RouteComponentProps } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useQuery } from "@apollo/client";
import { CLIENT_LANGUAGE } from "apollo/operations/i18n/queries/i18n.queries";
import { Container, Result } from "./styles";

interface IProps extends RouteComponentProps {
    type: 403 | 404 | 500 | "403" | "404" | "500";
}

const ErrorPage: React.FC<IProps> = props => {
    const { type, history } = props;
    const { i18n } = useTranslation();

    const { data: i18nLocal } = useQuery(CLIENT_LANGUAGE);
    const lang = i18nLocal?.i18n?.lng;

    const unauth = "Sorry, you are not authorized to access this page.";
    const notFound = "Sorry, the page you are trying to visit does not exist.";
    const serverErr = "Sorry, something is wrong with the server.";

    // The reason we use this function is because the ant.design "Result"
    // component does not call our t() function
    const getTranslation = (value: string) => {
        return i18n.getDataByLanguage(lang || "en").translation[value];
    };

    const GoBack = () => {
        history.push("/");
    };

    const showResult = () => {
        if (type === 403 || type === "403") {
            return (
                <Result
                    status={type}
                    title={type}
                    subTitle={getTranslation(unauth)}
                    extra={
                        <Button type="primary" onClick={GoBack}>
                            Back Home
                        </Button>
                    }
                />
            );
        }
        if (type === 500 || type === "500") {
            return (
                <Result
                    status={type}
                    title={type}
                    subTitle={getTranslation(serverErr)}
                    extra={
                        <Button type="primary" onClick={GoBack}>
                            Back Home
                        </Button>
                    }
                />
            );
        }
        if (type === 404 || type === "404") {
            return (
                <Result
                    status={type}
                    title={type}
                    subTitle={getTranslation(notFound)}
                    extra={
                        <Button type="primary" onClick={GoBack}>
                            Back Home
                        </Button>
                    }
                />
            );
        }
        return null;
    };

    return (
        <StandardTemplate>
            <PageTitle Title="Redirect - React BoilerPlate" />
            <Container>{showResult()}</Container>
        </StandardTemplate>
    );
};

export default ErrorPage;
