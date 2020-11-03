import { todosVar } from "../../../reactiveVars/todo";
import createAddTodo from "./addTodo/addTodo";

export const todoMutations = {
    addTodo: createAddTodo(todosVar),
};
