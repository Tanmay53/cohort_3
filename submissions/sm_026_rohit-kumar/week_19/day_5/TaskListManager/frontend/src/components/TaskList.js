import React from 'react'
import TaskRow from '../components/TaskRow'
import axios from 'axios'


class TaskList extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            name: '',
            desc: '',
            editTitleDisplay: true,
            editDescDisplay: true,
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    updateName = () => {
        const url = 'http://localhost:5000/task/update/name'
        axios.put(url, {'name': this.state.name, 'tasklist_id': this.props.tasklist.tasklist_id})
        .then(res => {
            console.log(res)
        })
    }

    updateDesc = () => {
        const url = ''
    }


    handleTitleClick = (val) => {
        if (val === 'edit') {
            this.setState({
                editTitleDisplay: false
            })
        }
        else {
            // save the title to database
            this.updateName()
            this.setState({
                editTitleDisplay: true
            })
        }
    }

    handleDescClick = (val) => {
        if (val === 'edit') {
            this.setState({
                editDescDisplay: false
            })
        }
        else {
            // save the desc to database
            this.updateDesc()
            this.setState({
                editDescDisplay: true
            })
        }
    }

    render() {
        return (
            <div className="mt-2">
                <div className='d-flex justify-content-between bg-primary text-white p-2'>
                    <h3>TaskList #{this.props.tasklist.tasklist_id}</h3>
                    <button onClick={this.handleDelete} className='btn btn-danger mt-1 ml-1'>
                        <i class="fa fa-close" style={{"font-size":"20px"}} aria-hitdden="true"></i>
                    </button>
                </div>
            <div className='card mt-1'>
                <div className='card-header'>
                    <div className='row'>
                       <div className='col-md-10 col-xs-12'>
                            {this.state.editTitleDisplay && <span className='h5 mt-3'> {this.props.tasklist.name}</span>}
                            {/* {! this.state.editTitleDisplay && <span><input className='form-control mt-1' type='text' placeholder={this.props.tasklist.name}/></span>} */}
                            {! this.state.editTitleDisplay && <span><textarea name="name" onChange={this.handleChange} value={this.state.name} className='form-control mt-1' style={{'font-size':'20px'}}  rows="2" placeholder={this.props.tasklist.name}/></span>}
                        </div>
                        <div className='col-md-2 col-xs-12 text-right'>
                            {this.state.editTitleDisplay && 
                                <button onClick={() => this.handleTitleClick('edit')} className='btn btn-primary mt-1'>
                                    <i class="fa fa-edit" style={{"font-size":"20px"}} aria-hitdden="true"></i>
                                </button>
                            }
                            {! this.state.editTitleDisplay && 
                                <button onClick={() => this.handleTitleClick('save')} className='btn btn-primary mt-1'>
                                    <i class="fa fa-save" style={{"font-size":"20px"}} aria-hidden="true"></i>
                                </button>
                            }
                   
                            
                            
                        </div>
                    </div>
                </div>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-10'>
                            {this.state.editDescDisplay && 
                                <span> 
                                    {this.props.tasklist.desc}
                                </span>}
                            {! this.state.editDescDisplay && <span><textarea name="desc" onChange={this.handleChange} value={this.state.desc} className='form-control mt-1' row="2" placeholder={this.props.tasklist.desc}/></span>}

                            
                        </div>
                        <div className='col-2 text-right'>
                            {this.state.editDescDisplay && 
                                    <button onClick={() => this.handleDescClick('edit')} className='btn btn-primary mt-1'>
                                        <i class="fa fa-edit" style={{"font-size":"20px"}} aria-hidden="true"></i>
                                    </button>
                            }
                            {! this.state.editDescDisplay && 
                                <button onClick={() => this.handleDescClick('save')} className='btn btn-primary mt-1'>
                                    <i class="fa fa-save" style={{"font-size":"20px"}} aria-hidden="true"></i>
                                </button>
                            }
                        </div>
                    </div>
                    <table className='table mt-2'>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Task Name</th>
                                <th className='text-right'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <TaskRow />
                            <TaskRow />
                        </tbody>
                        <tfoot>
                            <tr>
                                <td>1. </td>
                                <td>
                                    <textarea className='form-control' placeholder="Add New Task Here." row='2'></textarea>
                                </td>
                                <td className='text-right'>
                                    <button className='btn btn-sm btn-primary'>
                                        <i class="fa fa-plus" style={{"font-size":"15px"}} aria-hidden="true"></i>
                                    </button>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
            </div>
        )
    }
}

export default TaskList