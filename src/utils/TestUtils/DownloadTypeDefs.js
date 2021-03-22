import { fetchTypeDefs } from "apollo-mocked-provider";

const protocol = process.env.REACT_APP_GRAPHQL_PROTOCOL;
const host = process.env.REACT_APP_GRAPHQL_HOST;
const port = process.env.REACT_APP_GRAPHQL_PORT;
const version = process.env.REACT_APP_GRAPHQL_VERSION;
const route = process.env.REACT_APP_GRAPHQL_ROUTE;

(() => {
    fetchTypeDefs({
        uri: `${protocol}://${host}:${port}/${version}/${route}`,
    });
})();
