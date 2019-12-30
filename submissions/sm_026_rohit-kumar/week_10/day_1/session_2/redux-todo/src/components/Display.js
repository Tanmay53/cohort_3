import React from 'react'
import TaskItem from './TaskItem'

import {store, todoAdd, todoDelete, todoToggle} from '../store/store'

class Display extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h4>Todo:</h4>
                    <ul>
                        {store.getState().todo.filter((task) => {
                            return task.completed === false
                        }).map((task) => {
                            return <TaskItem item = {task}/>
                        })}
                    </ul>
                </div>
                <div>
                    <h4>Completed:</h4>
                    <ul>
                        {store.getState().todo.filter((task) => {
                            return task.completed === true
                        }).map((task) => {
                            return <TaskItem item = {task}/>
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Display