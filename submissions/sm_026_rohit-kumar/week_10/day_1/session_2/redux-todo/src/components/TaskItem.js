import React from 'react'
import {store, todoAdd, todoDelete, todoToggle} from '../store/store'


class TaskItem extends React.Component {
    constructor(props) {
        super()
    }

    handleRemove = () => {
        // console.log('Remove : ', this.props.item.task)
        store.dispatch(todoDelete(this.props.item.task))
    }
    handleCompleted = () => {
        // console.log('completed : ', this.props.item.task)
        store.dispatch(todoToggle(this.props.item.task))
    }

    render() {
        return (
            <li> 
                <h6>{this.props.item.task}</h6>
                <button onClick={this.handleCompleted}>Completed</button>
                <button onClick={this.handleRemove}>Remove</button>
            </li>
            
        )
    }
    
}

export default TaskItem