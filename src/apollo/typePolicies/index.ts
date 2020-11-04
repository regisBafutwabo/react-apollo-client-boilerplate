/* eslint-disable no-unused-vars */
import { TypePolicies } from "@apollo/client";

export const TypePolicy: TypePolicies = {
    Query: {
        fields: {
            localUser: {
                read(existing) {
                    return existing;
                },
                merge(existing, incoming) {
                    return { ...existing, ...incoming };
                },
            },
            i18n: {
                read(existing) {
                    return existing;
                },
                merge(existing, incoming) {
                    return { ...existing, ...incoming };
                },
            },
        },
    },
};
