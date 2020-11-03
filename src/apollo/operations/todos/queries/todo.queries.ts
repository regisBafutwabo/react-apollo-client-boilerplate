import { gql } from "@apollo/client";

export const CLIENT_GET_ALL_TODOS = gql`
    query GetAllToDos {
        todos @client {
            task
            completed
        }
    }
`;

export const ADD_TODO = gql`
    mutation AddTodo($task: String!, $completed: Boolean!) {
        addTodo(task: $task, completed: $completed) @client
    }
`;

export const UPDATE_TODO = gql`
    mutation UpdateTodo($id: Int!) {
        updateTodo(id: $id) @client
    }
`;

export const DELETE_TODO = gql`
    mutation DeleteTodo($id: Int!) {
        deleteTodo(id: $id) @client
    }
`;
