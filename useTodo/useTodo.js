import { useEffect, useReducer, useState } from "react";
import { todoReducer } from "./todoReducer";

const initialStates = [
];

const init = () => {
    return JSON.parse( localStorage.getItem('todos')) || [];
};



export const useTodo = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialStates, init );

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])
    

    const handledNewTodo = (todo) => {
        const action = {
            type: 'Add Todo',
            payload: todo
        }

        dispatch( action );
    };

    const handledRemove = ( id ) => {
        const action = {
            type: 'Remove Todo',
            payload: id
        };

        dispatch(action);
    };

    const handledToggleTodo = ( id ) =>{
        const action = {
            type: 'Toggle Todo',
            payload: id
        }

        dispatch(action);
    }

    const pendientes = () =>{
        return todos.filter((todo) => !todo.done ).length;
    }
    
    const totalTareas = () => {
        return todos.length;
    }



  return {
    todos,
    handledNewTodo,
    handledRemove,
    handledToggleTodo,
    pendientes,
    totalTareas
  };

  
}
