/**
 * This file is for setting up the web socket http link for subscriptions
 */
import { WebSocketLink } from "@apollo/client/link/ws";

const protocol = process.env.REACT_APP_GRAPHQL_PROTOCOL;
const host = process.env.REACT_APP_GRAPHQL_HOST;
const port = process.env.REACT_APP_GRAPHQL_PORT;
const version = process.env.REACT_APP_GRAPHQL_VERSION;
const route = process.env.REACT_APP_GRAPHQL_ROUTE;

const wsLink = new WebSocketLink({
    uri: `ws://${host}:${port}/${version}/${route}`,
    options: {
        reconnect: true,
    },
});

export default wsLink;
