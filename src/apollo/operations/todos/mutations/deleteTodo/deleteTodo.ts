import { ReactiveVar } from "@apollo/client";
import { Todos, Todo } from "../../../../models/todo.model";

export default function deleteTodo(todosVar: ReactiveVar<Todos>) {
    return (id: number) => {
        const allTodos = todosVar();
        const filteredTodos = allTodos.filter((todo: Todo) => todo.id !== id);
        todosVar(filteredTodos);
    };
}
