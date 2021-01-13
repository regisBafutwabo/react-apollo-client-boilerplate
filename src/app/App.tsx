import React from "react";
import { Switch, Route, Redirect, RouteComponentProps } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import { ErrorPage, Welcome } from "./loadable";

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
