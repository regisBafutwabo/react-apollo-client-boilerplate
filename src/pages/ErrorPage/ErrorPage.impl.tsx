import React from "react";
import Button from "antd/lib/button";
import { PageTitle } from "components/atoms";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { Container, Result } from "./styles";
import { ErrorPageProps } from "./ErrorPage.interface";

export const ErrorPage: React.FC<ErrorPageProps.IProps> = props => {
    const { type } = props;

    const history = useHistory();
    const { t } = useTranslation();

    const unauth = "You are not authorized to access this page.";
    const notFound = "The page you are trying to visit does not exist.";
    const serverErr = "Oops! Something is wrong with the server. Please Try again later";

    // The reason we use this function is because the ant.design "Result"
    // component does not call our t() function
    // const getTranslation = (value: string) => {
    //     return i18n.getDataByLanguage(lang || "en").translation[value];
    // };

    const GoBack = () => {
        history.replace("/");
    };

    const showResult = () => {
        if (type === "403") {
            return (
                <Result
                    type={type}
                    title={type}
                    desc={t(unauth)}
                    actions={
                        <Button type="primary" onClick={GoBack}>
                            Back Home
                        </Button>
                    }
                />
            );
        }
        if (type === "500") {
            return (
                <Result
                    type={type}
                    title={type}
                    desc={t(serverErr)}
                    actions={
                        <Button type="primary" onClick={GoBack}>
                            Back Home
                        </Button>
                    }
                />
            );
        }
        if (type === "404") {
            return (
                <Result
                    type={type}
                    title={type}
                    desc={t(notFound)}
                    actions={
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
        <Container>
            <PageTitle Title="Redirect - React BoilerPlate" />
            {showResult()}
        </Container>
    );
};
