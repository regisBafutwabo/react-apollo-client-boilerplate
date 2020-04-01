/* eslint-disable no-unused-vars */
/**
 * **** This file is for setting up the inital global state of the application
 * As you will see here below I created a sample state of type auth to check
 * the user authentication status
 */
import { merge } from "lodash";
import { LocalUser, I18n } from "generated/graphql";
import { userStateResolvers } from "./user";
import { i18nResolvers } from "./i18n";

export * from "./state";
export const resolvers = merge(userStateResolvers, i18nResolvers);

export interface ILocalState {
    localUser: LocalUser;
    i18n: I18n;
}

export const defaults: ILocalState = {
    localUser: {
        __typename: "LocalUser",
        isLoggedIn: false,
    },

    i18n: {
        __typename: "I18n",
        lng: "en",
    },
};
