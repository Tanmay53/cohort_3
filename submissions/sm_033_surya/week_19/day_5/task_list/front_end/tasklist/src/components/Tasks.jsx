import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

export class Tasks extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tasklist: {},
            tasks: [],
            content: "",
            istaskEdit: false,
            istitleEdit: false,
            isadd: false,
            taskid: ""
        }
    }
    componentDidMount() {
        axios({
            method: "GET",
            url: `http://localhost:5000/tlist/singletasklist/${this.props.match.params.id}`,
            headers: {
                'Authorization': this.props.value.token
            }
        })
            .then((res) => {
                this.setState({
                    tasklist: res.data[0]
                })
            })
        axios({
            method: "GET",
            url: `http://localhost:5000/task/gettasks/${this.props.match.params.id}`,
            headers: {
                'Authorization': this.props.value.token
            }
        })
            .then((res) => {
                console.log(res)
                this.setState({
                    tasks: res.data
                })
            })
    }

    addmodal = () => {
        this.setState({
            isadd: true,
            istaskEdit: false,
            istitleEdit: false,
            content: ""
        })
    }

    addtask = () => {

        axios({
            method: "POST",
            url: `http://localhost:5000/task/addtask/${this.props.match.params.id}`,
            data: {
                content: this.state.content
            },
            headers: {
                'Authorization': this.props.value.token
            }
        })
            .then((res) => {
                axios({
                    method: "GET",
                    url: `http://localhost:5000/task/gettasks/${this.props.match.params.id}`,
                    headers: {
                        'Authorization': this.props.value.token
                    }
                })
                    .then((res) => {
                        console.log(res)
                        this.setState({
                            tasks: res.data
                        })
                    })
            })
        this.setState({
            content: "",
            isadd: false
        })

    }


    //  content entering 

    handleChage = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    // edittask function 

    edittask = (id) => {
        console.log(id, "modal")
        this.setState({
            istaskEdit: true,
            istitleEdit: false,
            isadd: false
        })
        axios({
            method: "GET",
            url: `http://localhost:5000/task/getsingletask/${id}`,
            headers: {
                'Authorization': this.props.value.token
            }
        })
            .then((res) => {
                this.setState({
                    content: res.data[0].content,
                    taskid: res.data[0].id
                })
            })
    }

    deletetask = (id) => {
        this.setState({
            istaskEdit: true,
            istitleEdit: false,
            isadd: false
        })
        axios({
            method: "DELETE",
            url: `http://localhost:5000/task/getsingletask/${id}`,
            headers: {
                'Authorization': this.props.value.token
            }
        })
            .then((res) => {
                axios({
                    method: "GET",
                    url: `http://localhost:5000/task/gettasks/${this.props.match.params.id}`,
                    headers: {
                        'Authorization': this.props.value.token
                    }
                })
                    .then((res) => {
                        console.log(res)
                        this.setState({
                            tasks: res.data
                        })
                    })
            })
    }

    // updatetask 

    updatetask = () => {
        axios({
            method: "POST",
            url: `http://localhost:5000/task/getsingletask/${this.state.taskid}`,
            data: { 'content': this.state.content },
            headers: {
                'Authorization': this.props.value.token
            }
        })
            .then((res) => {
                axios({
                    method: "GET",
                    url: `http://localhost:5000/task/gettasks/${this.props.match.params.id}`,
                    headers: {
                        'Authorization': this.props.value.token
                    }
                })
                    .then((res) => {
                        console.log(res)
                        this.setState({
                            tasks: res.data
                        })
                    })

            })
        this.setState({
            content: "",
            istaskEdit: false
        })
    }

    edittitlemodal = () => {
        this.setState({
            istitleEdit: true,
            istaskEdit: false,
            isadd: false
        })
        axios({
            method: "GET",
            url: `http://localhost:5000/tlist/singletasklist/${this.props.match.params.id}`,
            headers: {
                'Authorization': this.props.value.token
            }
        })
            .then((res) => {
                this.setState({
                    content: res.data[0].title
                })
            })

    }


    edittitle = () => {
        axios({
            method: "POST",
            url: `http://localhost:5000/tlist/singletasklist/${this.props.match.params.id}`,
            data: {
                "content": this.state.content
            },
            headers: {
                'Authorization': this.props.value.token
            }
        })
            .then((res) => {
                axios({
                    method: "GET",
                    url: `http://localhost:5000/tlist/singletasklist/${this.props.match.params.id}`,
                    headers: {
                        'Authorization': this.props.value.token
                    }
                })
                    .then((res) => {
                        this.setState({
                            tasklist: res.data[0]
                        })
                    })
            })
        this.setState({
            istitleEdit: false,
            content: ""
        })

    }
    deletetasklist = () => {
        window.confirm("Are you sure you wish to clear the page?") &&
            axios({
                method: "DELETE",
                url: `http://localhost:5000/tlist/singletasklist/${this.props.match.params.id}`,
                headers: {
                    'Authorization': this.props.value.token
                }
            })
                .then((res) => {
                    this.props.history.push("/tlists")
                })
    }
    render() {
        console.log(this.state.content)
        return (
            <div>            <div className="container">
                <div className="col-12">

                    <h1>Title:{this.state.tasklist.title}</h1>
                    <button className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={this.edittitlemodal} >Edit</button>
                    <button className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={() => this.addmodal()}>Add</button>
                    <button onClick={this.deletetasklist}>Delete</button>
                    {/* <div className="row"> */}
                    {this.state.tasks.map((ele) => <div className="row"><div className="col-6">{ele.content}</div><div className="col-3"><button data-toggle="modal" data-target="#exampleModal" onClick={() => this.edittask(ele.id)}>edit</button></div><div><button onClick={() => this.deletetask(ele.id)}>delete</button></div></div>)}
                    {/* </div> */}
                </div>
            </div>




                <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Add task</h5>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-12">
                                        <input className="col-12 form-control" type="text" value={this.state.content} onChange={this.handleChage} />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                {this.state.isadd && <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.addtask}>Add task</button>}
                                {this.state.istaskEdit && <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.updatetask}>Update task</button>}
                                {this.state.istitleEdit && <button className="btn btn-primary" onClick={this.edittitle}>UpdateTitle</button>}

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    value: state.loginreducer
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks)