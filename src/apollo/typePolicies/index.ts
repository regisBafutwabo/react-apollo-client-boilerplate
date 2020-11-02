import { TypePolicies } from "@apollo/client";

export const TypePolicy: TypePolicies = {
    Query: {
        fields: {
            i18n: {
                read(existing) {
                    console.log("Reading i18n...", existing);
                    return existing;
                },
            },
            localUser: {
                read(existing) {
                    console.log("Reading local User...", existing);
                    return existing;
                },
            },
        },
    },
};
