/* eslint-disable no-unused-vars */
import { TypePolicies } from "@apollo/client";
import { initalUser, initialI18n } from "apollo/State";

export const TypePolicy: TypePolicies = {
    Query: {
        fields: {
            localUser: {
                read(existing) {
                    if (!existing) {
                        return initalUser;
                    }
                    return existing;
                },
                merge(existing, incoming) {
                    return { ...existing, ...incoming };
                },
            },
            i18n: {
                read(existing) {
                    if (!existing) {
                        return initialI18n;
                    }
                    return existing;
                },
                merge(existing, incoming) {
                    return { ...existing, ...incoming };
                },
            },
        },
    },
};
