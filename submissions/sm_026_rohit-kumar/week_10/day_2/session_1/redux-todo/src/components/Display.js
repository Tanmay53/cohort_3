import React from 'react'
import TaskItem from './TaskItem'
import {connect} from 'react-redux' 

function Display (props) {
    return (
        <div>
            <div>
                <h4>Todo:</h4>
                <ul>
                    {props.todo.filter((task) => {
                        return task.completed === false
                    }).map((task) => {
                        return <TaskItem item = {task}/>
                    })}
                </ul>
            </div>
            <div>
                <h4>Completed:</h4>
                <ul>
                    {props.todo.filter((task) => {
                        return task.completed === true
                    }).map((task) => {
                        return <TaskItem item = {task}/>
                    })}
                </ul>
            </div>
        </div>
    )
    }



 const mapStateToProps = (state) => {
    return {
        todo: state.todo
    }
} 



// export default Display
export default connect(mapStateToProps)(Display)