/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/extensions */
import React from "react";
import { Switch, Route, Redirect, RouteComponentProps } from "react-router-dom";
import { Welcome, ErrorPage } from "pages";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Switch>
                <Route exact path="/" component={Welcome} />
                <Route
                    exact
                    path="/NotFound"
                    render={(props: RouteComponentProps<any>) => (
                        <ErrorPage type="404" {...props} />
                    )}
                />
                <Route
                    exact
                    path="/Unauthorized"
                    render={(props: RouteComponentProps<any>) => (
                        <ErrorPage type="403" {...props} />
                    )}
                />
                <Route
                    exact
                    path="/Error"
                    render={(props: RouteComponentProps<any>) => (
                        <ErrorPage type="500" {...props} />
                    )}
                />

                <Redirect to="/NotFound" />
            </Switch>
        </ThemeProvider>
    );
};

export default App;
