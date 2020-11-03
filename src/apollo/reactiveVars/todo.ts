import { ReactiveVar, makeVar } from "@apollo/client";
import { Todos } from "../models";
import { todosInitialValue } from "../state/todo.init";

export const todosVar: ReactiveVar<Todos> = makeVar<Todos>(todosInitialValue);
