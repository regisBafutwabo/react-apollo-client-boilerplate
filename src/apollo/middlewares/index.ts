import { ApolloLink } from "apollo-link";
import serverLink from "./server";

const link: ApolloLink = ApolloLink.from([serverLink]);

export default link;
