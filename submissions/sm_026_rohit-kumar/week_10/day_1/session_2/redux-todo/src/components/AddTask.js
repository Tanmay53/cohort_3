import React from 'react'
import {store, todoAdd, todoDelete, todoToggle} from '../store/store'



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

        store.dispatch(todoAdd(this.state.taskName))
        this.setState({
            taskName: ''
        })
        
    }

    render() {
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

export default AddTask