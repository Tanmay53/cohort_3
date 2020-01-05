import React from 'react'
import {connect} from 'react-redux'
import {todoDelete, todoToggle} from '../actions/actions'


class TaskItem extends React.Component {
    constructor(props) {
        super(props)
    }

    handleRemove = () => {
        // console.log('Remove : ', this.props.item.task)
        this.props.todoDelete(this.props.item.task)
    }
    handleCompleted = () => {
        // console.log('completed : ', this.props.item.task)
        this.props.todoToggle(this.props.item.task)
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

/* const mapStateToProps = (state) => {
    return {...state}
}
 */
const mapDispatchToProps = (dispatch) => {
    return {
        todoDelete: (task) => dispatch(todoDelete(task)),
        todoToggle: (task) => dispatch(todoToggle(task))
    }
}
export default connect(null, mapDispatchToProps) (TaskItem)