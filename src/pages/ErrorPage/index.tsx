import React from "react";

import { PageTitle } from "components/atoms";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { ErrorPageProps } from "./ErrorPage.interface";
import { Container } from "./styles";

export const ErrorPage: React.FC<ErrorPageProps> = ({ type }) => {
    const navigate = useNavigate();
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
        navigate(-1);
    };

    const showResult = () => {
        if (type === "403") {
            return <>{unauth}</>;
        }
        if (type === "500") {
            return <>{serverErr}</>;
        }
        if (type === "404") {
            return <>{notFound}</>;
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
