import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
            data: []
        }
    }
    componentDidMount() {
        axios({
            method: 'GET',
            url: 'http://localhost:5000/getdata/dashboard',
        })
            .then((res) => {
                this.setState({
                    data: res.data
                })
            })
            .catch((Res) => {
                console.log("error")
            })
    }
    handleChange = (e) => {
        this.setState({
            search: e.target.value
        })
    }
    handleClick = () => {
        axios({
            method: 'POST',
            url: 'http://localhost:5000/getdata/search',
            data: {
                'text': this.state.search
            }
        })
            .then((res) => {
                console.log(res)
                this.setState({
                    data: res.data
                })
            })
            .catch((res) => {
                'error'
            })
    }
    deletebook = (id) => {
        axios({
            method: 'GET',
            url: `http://localhost:5000/deletedata/deletebook/${id}`
        })
            .then((res) => {
                axios({
                    method: 'GET',
                    url: 'http://localhost:5000/getdata/dashboard',
                })
                    .then((res) => {
                        this.setState({
                            data: res.data
                        })
                    })
                    .catch((Res) => {
                        console.log("error")
                    })
            })
            .catch((res) => {
                console.log("error")
            })

    }
    render() {
        console.log(this.state.data)
        return (
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <input type="text" className="col-12 form-control" placeholder="Search by Book Title,Author or Category" value={this.state.search} onChange={this.handleChange} />
                    </div>
                    <div className="col-4">
                        <button className="btn btn-success" onClick={this.handleClick}>Search</button>
                    </div>
                </div>
                <div className="row">
                    {this.state.data.map((ele) => <div className="col-3 m-1 p-4 border "> <div> <div className="col-12">Book Title:<h3>{ele.title}</h3></div><div className="col-12">Published By<h5>{ele.publishername}</h5></div><div className="col-12">Authors:<p>{ele.Authors}</p></div><div className="col-12">Categories:<p>{ele.categories}</p></div><div className="col-12"><div className="row">
                        <div className="col-6"><Link to={`/editbook/${ele.id}`} ><button className="btn btn-warning">Edit</button></Link></div>
                        <div className="col-6"><button className="btn btn-danger" onClick={() => this.deletebook(ele.id)}>Delete</button></div>
                    </div>
                    </div></div></div>
                    )}
                </div>
            </div>
        )
    }
}
