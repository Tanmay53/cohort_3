import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CreateTasklist } from './CreateTasklist'
import axios from 'axios'
import { Link } from 'react-router-dom'

export class Tasklists extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            back: false,
            tlists: []
        }
    }
    componentDidMount() {
        axios({
            method: "GET",
            url: 'http://localhost:5000/tlist/gettlists',
            headers: {
                'Authorization': this.props.value.token
            }
        })
            .then((res) => {
                console.log(res)
                this.setState({
                    tlists: res.data
                })
            })

    }
    handleClick = () => {
        let temp = this.state.tlists
        let item = {
            title: this.state.title
        }
        temp.push(item)
        this.setState({
            tlists: temp
        })
        axios({
            method: "POST",
            url: "http://localhost:5000/tlist/createtlist",
            data: { "title": this.state.title },
            headers: {
                'Authorization': this.props.value.token
            }
        })
            .then((res) => {
                axios({
                    method: "GET",
                    url: 'http://localhost:5000/tlist/gettlists',
                    headers: {
                        'Authorization': this.props.value.token
                    }
                })
                    .then((res) => {
                        console.log(res)
                        this.setState({
                            tlists: res.data
                        })
                    })
            })
    }
    handleChage = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    render() {
        console.log(this.props.value.token)
        return (
            <div className="container">
                <div className="col-12">
                    <div className="row">
                        <div className="col-8">
                            <h1>Welcome back {this.props.value.user}</h1>
                        </div>
                        <div className="col-4">
                            <button className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Create New Tasklist</button>
                        </div>
                    </div>
                    {this.state.tlists.map((ele) => <div><Link to={`/tlist/${ele.tasklist_id}`}>{ele.title}</Link>{ele.count}</div>)}
                </div>





                <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Enter list title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-12">
                                        <input className="col-12 form-control" type="text" value={this.state.title} onChange={this.handleChage} />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" data-dismiss="modal" onClick={this.handleClick} className="btn btn-primary">Save changes</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Tasklists)
