import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

class Postshows extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            isAuth: true
        }
    }
    componentDidMount() {
        axios({
            method: "GET",
            url: 'http://localhost:5000/listing'
        })
            .then((res) => {
                console.log(res)
                this.setState({
                    data: res.data
                })
            })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.state.data.map((ele) => <div className="col-4 p-3">
                        <div className="col-12"> <h2>{ele.title}</h2>
                            <p>by...<p className="text-danger">{ele.name}</p></p>
                        </div>
                        <div className="col-12 text-right"><p>{ele.date}</p></div>
                        <div className="col-12" style={{ "height": "100px", "overflow": "hidden" }}><p>{ele.content}</p></div>
                        <div><Link to={`/post/${ele.id}`}><button className="btn btn-primary">Readmore</button></Link></div>
                    </div>)}
                </div>
            </div>
        )

    }
}
export default Postshows