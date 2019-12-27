import React from 'react'
import {connect} from 'react-redux'
import {todoAdd} from '../actions/actions'



class AddTask extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            taskName : ''
        }
    }

    

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
        
    } 

    handleAddTask =() => {
        // code to add task to store

        this.props.todoAdd(this.state.taskName)
        //console.log('tast : ', this.state.taskName)
        this.setState({
            taskName: ''
        })
        

        
    }

    render() {

        console.log('add task : ', this.props.todo)
        return (
            <div>
                <table>
                    <tr>
                        <td>
                            <input name='taskName' value={this.state.taskName} onChange={this.handleChange}  type='text' placeholder='Enter Task'/>
                        </td>
                        <td>
                            <button onClick={this.handleAddTask}>Add</button>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('if this works ever L ', state)
    return {...state}
}

const mapDispatchToProps = (dispatch) => {
    return {
        todoAdd: (task) => dispatch(todoAdd(task))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTask)