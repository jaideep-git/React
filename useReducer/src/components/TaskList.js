import React from 'react';
import { ACTIONS } from './Todo'

function TaskList({ tasks, dispatch }) {

    const taskList = tasks.map((todo) => {
        return (
            <div key={todo.id}>
                <span style={{ fontSize: '19px', textDecorationLine: todo.complete ? 'line-through' : '' }} >{todo.task}</span>
                <button onClick={() => dispatch({
                    type: ACTIONS.CHANGE_STATUS,
                    payload: {
                        id: todo.id
                    }
                })}>Complete</button>
                <button
                    onClick={() => dispatch({
                        type: ACTIONS.DELETE_TASK,
                        payload: {
                            id: todo.id
                        }
                    })}
                >Delete</button>
            </div>
    
        )
    })

    return (
        <>
            {taskList}
        </>
    )
}

export default TaskList
