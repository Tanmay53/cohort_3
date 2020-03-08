import React from 'react'
import axios from "axios"
import { Link, Redirect } from "react-router-dom"
import { connect } from 'react-redux'
import { MDBNotification } from "mdbreact";


// class to add Notification when a tasklist is deleted
class Notification extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <MDBNotification
                style={{
                    width: "auto",
                    position: "fixed",
                    top: "10%",
                    right: "10px",
                    zIndex: 9999
                }}
                show
                fade
                icon="envelope"
                iconClassName="green-text"
                title="New Message"
                message="Hello, user! You just deleted a Tasklist"
                text="just now"
            />
        );
    }
}

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tasklists: [],
            update: 0,
            task: "",
            add: "",
            comment_id: 0,
            doj: "",
            delete: 0
        }
    }


    // initial setup
    componentDidMount = async () => {
        var token = this.props.token
        await axios({
            method: 'get',
            url: "http://127.0.0.1:5000/allTasklists",
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(res => this.setState({
                tasklists: res.data.items
            }))

        await axios({
            method: 'get',
            url: "http://127.0.0.1:5000/auth/joiningDate",
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(res => this.setState({
                doj: res.data[0]["date"]
            }))

    }


    // function to delete a tasklist
    handleDelete = async (idx) => {
        var token = this.props.token
        this.setState({
            delete: 1
        })
        await axios({
            method: 'get',
            url: `http://127.0.0.1:5000/listing/deleteTasklists/${idx}`,
            headers: { 'Authorization': `Bearer ${token}` }
        })

        // set a time gap to display the notifications
        setTimeout(() => {
            axios({
                method: 'get',
                url: "http://127.0.0.1:5000/allTasklists",
                headers: { 'Authorization': `Bearer ${token}` }
            })
                .then(res => this.setState({
                    tasklists: res.data.items,
                    delete: 0
                }))
        }, 3000)
    }

    // function to add a tasklist
    handleChange = (e) => {
        this.setState({
            add: e.target.value
        })
    }

    // function to add and call set table again
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
            url: "http://127.0.0.1:5000/listing/addTaskList",
            headers: { 'Authorization': `Bearer ${token}` },
            data: {
                add: this.state.add,
                date: date
            }
        })
            .then(res => console.log(res))


        await axios({
            method: 'get',
            url: "http://127.0.0.1:5000/allTasklists",
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(res => this.setState({
                tasklists: res.data.items
            }))
    }

    // function to toggle between the table entries
    Update = (idx, name) => {
        this.setState({
            update: 1,
            comment_id: idx,
            task: name
        })
    }
    changeTask = (e) => {
        this.setState({
            task: e.target.value,
        })
    }

    // function to update the tasklist
    UpdateTask = async (id) => {
        var token = this.props.token
        this.setState({
            update: 0
        })
        await axios({
            method: 'POST',
            url: `http://127.0.0.1:5000/listing/updateTaskList/${id}`,
            headers: { 'Authorization': `Bearer ${token}` },
            data: {
                task: this.state.task
            }
        })

        await axios({
            method: 'get',
            url: "http://127.0.0.1:5000/allTasklists",
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(res => this.setState({
                tasklists: res.data.items
            }))

    }
    render() {
        console.log(this.state)
        if (this.props.token) {
            return (
                <React.Fragment>
                    {this.state.delete == 1 ? <Notification /> : <div></div>}
                    <h4 class="text-center my-4">Active Tasklist since your joining on<span class="ml-2 text-danger">{this.state.doj}</span></h4>
                    <h5 class="text-center my-2">Click on
                    <button type="button" class="btn mx-1" data-toggle="modal" data-target="#exampleModalCenter">
                            <i class="fa fa-plus" style={{ "font-size": "36px", "color": "red" }}></i>
                        </button> to add another Tasklist</h5>
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
                    {this.state.tasklists ?
                        <div class="table-responsive">
                            <table class="table table-hover table-dark" style={{ "width": "100%" }}>
                                <thead>
                                    <tr>
                                        <th scope="col">No.</th>
                                        <th scope="col">Tasklist</th>
                                        <th scope="col">Created Date</th>
                                        <th scope="col">Shows</th>
                                        <th scope="col">Update</th>
                                        <th scope="col">Delete</th>
                                        <th scope="col">Pending</th>
                                    </tr>
                                </thead>
                                {this.state.tasklists.map((item, index) =>
                                    <tbody key={index}>
                                        {this.state.update == 0 || this.state.comment_id != item.id ?
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td><p>{item.name}</p></td>
                                                <td><p>{item.date}</p></td>
                                                <td><button class="btn btn-outline-success"><Link to={`/crud/${item.id}`} class="text-success" style={{ "textDecoration": "none" }}><i class="fa fa-eye" aria-hidden="true"></i></Link></button></td>
                                                <td><button onClick={() => this.Update(item.id, item.name)} class="btn btn-outline-warning "><i class="fa fa-eraser" aria-hidden="true"></i></button></td>
                                                <td><button class="btn btn-outline-danger" onClick={() => this.handleDelete(item.id)}><i class='fas fa-trash' style={{ "font-size": "15px" }}></i></button></td>
                                                <td><p>{item.pending}</p></td>
                                            </tr>
                                            :
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td><textarea onChange={this.changeTask} rows="1" style={{ "border": "none" }} autoFocus type="text">{item.name}</textarea></td>
                                                <td><p>{item.date}</p></td>
                                                <td><button class="btn btn-outline-success"><Link to={`/crud/${item.id}`} class="text-success" style={{ "textDecoration": "none" }}><i class="fa fa-eye" aria-hidden="true"></i></Link></button></td>
                                                <td><button onClick={() => this.UpdateTask(item.id)} class="btn btn-outline-warning "><i class="fa fa-eraser" aria-hidden="true"></i></button></td>
                                                <td><button class="btn btn-outline-danger" onClick={() => this.handleDelete(item.id)}><i class='fas fa-trash' style={{ "font-size": "15px" }}></i></button></td>
                                                <td><p>{item.pending}</p></td>
                                            </tr>
                                        }
                                    </tbody>
                                )}
                            </table>
                        </div> :
                        <div>
                            <h2 class="m-5 text-danger">YOU DONT HAVE ANY TASKLISTS</h2>
                        </div>
                    }
                </React.Fragment >
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
export default connect(mapStateToProps)(Home)

