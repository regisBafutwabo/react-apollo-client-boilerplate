import { i18nModel } from "apollo/models";
import { ReactiveVar, makeVar } from "@apollo/client";
import { i18nInitialValue } from "../state/i18n.init";

export const i18nVar: ReactiveVar<i18nModel> = makeVar<i18nModel>(i18nInitialValue);
