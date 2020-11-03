import { ReactiveVar } from "@apollo/client";
import { Todos, Todo } from "../../../../models/todo.model";

const createAddTodo = (todosVar: ReactiveVar<Todos>) => {
    const createNewTodoId = (allTodos: Todos) => {
        return (
            allTodos.reduce((maxId: number, todo: Todo) => Math.max(todo.id, maxId), -1) + 1
        );
    };

    const createNewTodo = (task: string, allTodos: Todos) => {
        return { task, completed: false, id: createNewTodoId(allTodos) };
    };

    return (task: string) => {
        const allTodos = todosVar();
        todosVar(allTodos.concat([createNewTodo(task, allTodos)]));
    };
};

export default createAddTodo;
