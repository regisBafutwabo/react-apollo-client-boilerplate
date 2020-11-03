/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import React from "react";
import logo from "assets/app/logo.svg";
import { useTranslation } from "react-i18next";

import { Image, Loading } from "components/atoms";
import { StandardTemplate } from "components/templates";
import { RouteComponentProps } from "react-router-dom";
import PageTitle from "components/atoms/PageTitle";
import { CLIENT_GET_ALL_TODOS } from "apollo/operations/todos/queries/todo.queries";
import { useQuery } from "@apollo/client";
import { Todo } from "apollo/models";
import { Container, Anchor } from "./styles";
import TodosList from "./components/Todos/todos";

interface IProps extends RouteComponentProps {}

const Welcome: React.FC<IProps> = () => {
    const { t, ready } = useTranslation("translation", { useSuspense: false });
    const todos = useQuery(CLIENT_GET_ALL_TODOS);
    console.log("todos", todos);
    return (
        <StandardTemplate>
            <PageTitle Title="Welcome - React Boilerplate" />
            <Container className="App">
                <TodosList todos={todos.data.todos} />
                <Anchor href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    {ready ? <>{t("Welcome to React")}</> : <Loading type="skeleton" />}
                </Anchor>
            </Container>
        </StandardTemplate>
    );
};

export default Welcome;
