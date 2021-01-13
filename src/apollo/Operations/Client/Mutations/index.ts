import { Resolvers } from "@apollo/client";
import { userStateResolvers } from "./user";
import { i18nResolvers } from "./i18n";

export const LocalResolvers: Resolvers[] = [i18nResolvers, userStateResolvers];
