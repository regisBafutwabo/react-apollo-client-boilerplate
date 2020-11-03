import { TypePolicies } from "@apollo/client";
import { i18nVar, todosVar } from "apollo/reactiveVars";
import { Todo, Todos } from "../models/todo.model";

/* eslint-disable array-callback-return */

export const TypePolicy: TypePolicies = {
    Query: {
        fields: {
            i18n: {
                read(existing) {
                    console.log("Reading i18n...", existing);
                    return i18nVar();
                },
            },
            todos: {
                read() {
                    return todosVar();
                },
                merge(existing, incoming: Todos) {
                    console.log("mergin todos...", existing, incoming);
                    let duplicate = false;

                    existing.map((item: Todo) => {
                        if (incoming[0].id === item.id) {
                            duplicate = true;
                        }
                    });
                    if (duplicate) return [...existing];
                    return [...existing, ...incoming];
                },
            },
            updateLanguage: {
                read(exisiting, incoming) {
                    console.log("edited language to ", incoming);
                    return incoming;
                },
            },
        },
    },
};
