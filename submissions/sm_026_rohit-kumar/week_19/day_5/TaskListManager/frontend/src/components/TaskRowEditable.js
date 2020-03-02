import React from 'react'
import {connect} from 'react-redux'
import {add_task, delete_task} from '../redux/Action'
import axios from 'axios'
import uuid from 'react-uuid'

class TaskRowEditable extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            task: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        
    }

    handleClick = () => {
        const data = {
            tasklist_id: this.props.tasklist_id,
            name: this.state.task,
            uuid: uuid()
        }
        axios.post('http://localhost:5000/task/create/task', data)
        .then(res => {
            if(res['data']['result'] === 'success') {
                this.props.add_task(data)
                this.setState({
                    task: ''
                })
            }
        })
    }

    render() {
       
        return (
            <>
                <tr>
                    <td>{this.props.index}.</td>
                    <td>
                        <textarea name='task' onChange={this.handleChange} value={this.state.task} className='form-control' placeholder="Add New Task Here." row='2'></textarea>
                    </td>
                    <td className='text-right'>
                        <button onClick={this.handleClick} className='btn btn-sm btn-primary'>
                            <i class="fa fa-plus" style={{"font-size":"15px"}} aria-hidden="true"></i>
                        </button>
                    </td>
                </tr>
            </> 
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add_task: (data) => dispatch(add_task(data))
    }
}

export default connect(null, mapDispatchToProps)(TaskRowEditable)