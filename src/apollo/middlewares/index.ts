import { ApolloLink } from "@apollo/client";
import serverLink from "./server";

const link: ApolloLink = ApolloLink.from([serverLink]);

export default link;
