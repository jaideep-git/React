import React, { useState, useReducer } from 'react';
import TaskList from './TaskList';

// Action --> Dispatch --> Reducer

export const ACTIONS = {
    ADD_TODO: 'ADD-TODO',
    CHANGE_STATUS: 'CHANGE_STATUS',
    DELETE_TASK:'DELETE_TASK'
}

const reducer = (todos,action) => {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.task)]
        case ACTIONS.CHANGE_STATUS:
            return todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return { ...todo, complete: !todo.complete}
                }
                return todo
            })
        case ACTIONS.DELETE_TASK:
            return todos.filter(todo => todo.id !== action.payload.id)
        default:
            return todos
     }
}

const newTodo = (task) => {
    return { id: Date.now(), task:task , complete: false }
     
}

function Todo() {
    const [todos, dispatch] = useReducer(reducer, []);
    const [task, setTask] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        dispatch({
            type: ACTIONS.ADD_TODO,
            payload: { task:task }
        })
        setTask('')
    }

    return (
        <div>
            <h1>Add a Task</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={task} onChange={ e => setTask(e.target.value)} />
            </form>
            <div style={{ marginTop:"20px"}}>
                <h2>Todo List:</h2>
                <TaskList tasks={todos} dispatch={dispatch}/>
            </div>
        </div>
    )
}

export default Todo