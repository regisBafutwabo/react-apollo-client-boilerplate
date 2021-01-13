import { userStateResolvers } from "./user";
import { i18nResolvers } from "./i18n";
import { Resolvers } from "@apollo/client";

export const LocalResolvers: Resolvers[] = [i18nResolvers, userStateResolvers];
