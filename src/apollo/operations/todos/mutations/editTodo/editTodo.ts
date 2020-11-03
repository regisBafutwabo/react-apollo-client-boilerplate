import { ReactiveVar } from "@apollo/client";
import { Todos, Todo } from "../../../../models/todo.model";

export default (todosVar: ReactiveVar<Todos>) => {
    return (id: number, task: string) => {
        const todosWithEditedTodo = todosVar().map((todo: Todo) =>
            todo.id === id ? { ...todo, task } : todo,
        );

        todosVar(todosWithEditedTodo);
    };
};
