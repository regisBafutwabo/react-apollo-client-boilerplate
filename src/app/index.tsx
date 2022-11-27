import React from "react";

import { ErrorPage } from "pages/ErrorPage";
import Welcome from "pages/Welcome";
import { createBrowserRouter, RouteObject, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";

const routesConfig: RouteObject[] = [
    {
        path: "/",
        element: <Welcome />,
    },
    {
        path: "*",
        element: <ErrorPage type="404" />,
    },
];

const router = createBrowserRouter(routesConfig, { basename: "/" });

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    );
};

export default App;
