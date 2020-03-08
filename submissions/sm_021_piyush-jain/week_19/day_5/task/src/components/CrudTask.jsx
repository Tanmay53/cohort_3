import React from 'react'
import axios from "axios"
import { Link, Redirect } from "react-router-dom"
import { connect } from 'react-redux'
import { login, logout } from "../redux/action"
class CrudTask extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 0,
            tasklists:"",
            task: [],
            update: 0,
            comment_id: 0,
            comment: "",
            add: ""
        }
    }
    componentDidMount = async () => {
        this.setState({
            id: this.props.match.params.id
        })
        var token = this.props.token
        console.log(this.state)
        await axios({
            method: 'get',
            url: `http://127.0.0.1:5000/task/oneTasklist/${this.props.match.params.id}`,
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(res => this.setState({
                tasklists: res.data.items[0]["name"]
            }))
        await axios({
            method: 'get',
            url: `http://127.0.0.1:5000/task/allTasks/${this.props.match.params.id}`,
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(res => this.setState({
                task: res.data.items
            }))
    }
    Update = (idx,name) => {
        this.setState({
            update: 1,
            comment_id: idx,
            comment:name
        })
    }
    changeTask = (e) => {
        this.setState({
            comment: e.target.value
        })
    }
    UpdateTask = async (idx) => {
        var token = this.props.token
        await axios({
            method: 'POST',
            url: `http://127.0.0.1:5000/task/editTask/${idx}`,
            headers: { 'Authorization': `Bearer ${token}` },
            data: {
                comment: this.state.comment
            }
        })
            .then(res => console.log(res))


        await axios({
            method: 'get',
            url: `http://127.0.0.1:5000/task/allTasks/${this.props.match.params.id}`,
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(res => this.setState({
                task: res.data.items
            }))

        this.setState({
            update: 0
        })
    }
    handleDelete = async (idx) => {
        var token = this.props.token
        await axios({
            method: 'get',
            url: `http://127.0.0.1:5000/task/deleteTask/${idx}`,
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(res => console.log(res))

        await axios({
            method: 'get',
            url: `http://127.0.0.1:5000/task/allTasks/${this.props.match.params.id}`,
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(res => this.setState({
                task: res.data.items
            }))
    }
    handleChange = (e) => {
        this.setState({
            add: e.target.value
        })
    }
    handleClick = async () => {
        var token = this.props.token
        var date = ""
        var temp = 0
        temp = new Date()
        date += temp.getFullYear() + "-";
        date += (temp.getMonth() + 1) + "-";
        date += temp.getDate()
        await axios({
            method: 'POST',
            url: `http://127.0.0.1:5000/task/addTask/${this.props.match.params.id}`,
            headers: { 'Authorization': `Bearer ${token}` },
            data: {
                add: this.state.add,
                date:date
            }
        })
            .then(res => console.log(res))


        await axios({
            method: 'get',
            url: `http://127.0.0.1:5000/task/allTasks/${this.props.match.params.id}`,
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(res => this.setState({
                task: res.data.items
            }))

    }
    render() {
        if (this.props.token) {
            return (
                <React.Fragment>
                    <h5 class="text-center my-3">Click on
                    <button type="button" class="btn mx-1" data-toggle="modal" data-target="#exampleModalCenter">
                            <i class="fa fa-plus" style={{ "font-size": "36px", "color": "red" }}></i>
                        </button> to add another Task</h5>
                    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLongTitle">Add A Task</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <input type="text" name="add" onChange={this.handleChange} style={{ "border": "none" }} />
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={this.handleClick}>Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div class="bg-dark text-white p-3 text-center lead">
                            {this.state.tasklists}
                        </div>
                        <div class="table-responsive">
                            {this.state.task ?
                                <table class="table table-striped table-dark">
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>Task</th>
                                            <th>Edit</th>
                                            <th>Delete</th>
                                            <th>Created on</th>
                                        </tr>
                                    </thead>
                                    {this.state.task.map((item, index) =>
                                        <tbody key={index}>
                                                {this.state.update == 0|| this.state.comment_id != item.id ?
                                                    <tr>
                                                        <td><p>{index+1}</p></td>
                                                        <td><p>{item.name}</p></td>
                                                        <td><button onClick={() => this.Update(item.id,item.name)} class="btn btn-outline-warning "><i class="fa fa-eraser" aria-hidden="true"></i></button></td>
                                                        <td> <button class="btn btn-outline-danger" onClick={() => this.handleDelete(item.id)}><i class='fas fa-trash' style={{ "font-size": "15px" }}></i></button></td>
                                                <td>{item.date}</td>
                                                    </tr>
                                                    : 
                                                    <tr>
                                                        <td><p>{index+1}</p></td>
                                                        <td><textarea onChange={this.changeTask} rows="1" style={{ "border": "none" }} autoFocus type="text">{item.name}</textarea></td>
                                                        <td><button onClick={() => this.UpdateTask(item.id)} class="btn btn-outline-warning "><i class="fa fa-eraser" aria-hidden="true"></i></button></td>
                                                        <td><button class="btn btn-outline-danger" onClick={() => this.handleDelete(item.id)}><i class='fas fa-trash' style={{ "font-size": "15px" }}></i></button></td>
                                                        <td>{item.date}</td>

                                                    </tr>
                                                    }
                                                    </tbody>
                                            )}
                                    </table>
                                :
                                <div>
                                    <h3 class="text-center my-5">No task for this tasklist</h3>
                                </div>
                            }
                            </div>
                            </React.Fragment>
            )
        }
        else {
            return (<Redirect to="/register"></Redirect>)
        }
    }
}
const mapStateToProps = (state) => ({
    status: state.login,
    token: state.token
})

const mapDispatchToProps = dispatch => {
    return ({
        login: (data) => dispatch(login(data))
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(CrudTask)

