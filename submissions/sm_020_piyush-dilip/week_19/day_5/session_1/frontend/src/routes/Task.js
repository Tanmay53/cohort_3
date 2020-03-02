import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Axios from 'axios'
export class Task extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             task : '',
             tasks : [],
             updateTask : ''
        }
    }
    
    componentDidMount(){
        let id = this.props.match.params.id
        Axios({
            method : 'post',
            baseURL : 'http://127.0.0.1:5000/task/read',
            data : { listId : id }
        })
        .then(res => {
            this.setState({
                tasks : res.data.tasks
            })
        })
    }

    handleDelete = (id) => {
        let token = localStorage.getItem('token')
        Axios({
            'method' : 'delete',
            baseURL : `http://127.0.0.1:5000/task/delete/${id}`,
            headers : { Authorization : "Bearer " + token}
        })
        .then(res => {
            this.componentDidMount()
        })
    }

    handleEdit = (id) => {
        Axios({
            'method' : 'get',
            baseURL : `http://127.0.0.1:5000/task/read/${id}`
        })
        .then(res => {
        this.setState({
            updateTask : res.data.task[0].task
        })
        console.log(res.data)
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleUpdate = () => {
        let updatedTask ={
            task : this.state.task
        }
    }

    render() {
        return (
            <div className="container">
                <Navbar token={localStorage.getItem('token')} />

                <div className="row">
                            {this.state.tasks && this.state.tasks.map(task =>
                            <div className="col-12 col-md-3" key={task.id}>
                                <div className="card border-primary  m-2 "  >
                                <div className="card-header">{task.task}</div>
                                <div className="card-body text-primary">
                                    <button className="btn btn-danger btn-sm mr-2" onClick={() => this.handleDelete(task.id)}>Delete</button>
                                    <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModalScrollable" onClick={() => this.handleEdit(task.id)}>Edit</button>
                                            <div className="modal fade" id="exampleModalScrollable" tabIndex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-scrollable" role="document">
                                                <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="exampleModalScrollableTitle">Update task</h5>
                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body">
                                                    <input type="text" id="updateTask" value={this.state.updateTask} onChange={this.handleChange} className="form-control" />
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                    <button type="button" className="btn btn-primary" data-dismiss="modal">Update</button>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                </div>
                              </div>
                              </div>
                            )}
                </div>
            </div>
        )
    }
}


export default Task
