import { ReactiveVar } from "@apollo/client";
import { i18nModel } from "apollo/models";

export default (i18nVar: ReactiveVar<i18nModel>) => {
    console.log("here");
    return (lng: string) => {
        i18nVar({ lng });
    };
};
