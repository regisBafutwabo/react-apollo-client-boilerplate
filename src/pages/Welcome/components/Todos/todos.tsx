import { Todos } from "apollo/models";
import React from "react";
import { Container, TaskId, TaskText, Todo } from "./styles";

interface IProps {
    todos: Todos;
}

const TodosList: React.FC<IProps> = props => {
    const { todos } = props;
    return (
        <Container>
            {todos.map((todo, index) => (
                <Todo>
                    <TaskId>{index}</TaskId>
                    <TaskText>{todo.task}</TaskText>
                </Todo>
            ))}
        </Container>
    );
};

export default TodosList;
