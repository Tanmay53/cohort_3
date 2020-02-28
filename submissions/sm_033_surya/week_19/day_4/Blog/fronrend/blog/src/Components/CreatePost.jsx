import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class CreatePost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            Category: "",
            content: "",
            isAuth: true
        }
    }
    componentDidMount() {
        let token = localStorage.getItem("token")
        if (token == null || token == "error") {

            this.setState({
                isAuth: false
            })
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClick = () => {
        let token = localStorage.getItem("token")
        let temp = {
            title: this.state.title,
            Category: this.state.Category,
            content: this.state.content
        }
        axios({
            method: "POST",
            url: "http://localhost:5000/createpost",
            data: temp,
            headers: { 'Authorization': `Bearer ${token}` }
        })
        .then((res)=>{
            this.props.history.push("/")
        })
        this.setState({
            title: "",
            Category: "",
            content: ""
        })
    }


    render() {
        if (this.state.isAuth) {
            return (
                <div className="container">
                    <div className="row text-center">
                        <div className="col-12">
                            <label>Title</label>
                        </div>
                        <div className="col-12">
                            <input type="text" className="col-6" name="title" value={this.state.title} onChange={this.handleChange} />
                        </div>
                        <div className="col-12">
                            <label>Category</label>
                        </div>
                        <div className="col-12">
                            <select className="col-6 btn btn-light" name="Category" value={this.state.Category} onChange={this.handleChange}>
                                <option value="Travel">Travel</option>
                                <option value="Music">Music</option>
                                <option value="LifeStyle">LifeStyle</option>
                                <option value="DIY">DIY</option>
                                <option value="Sports">Sports</option>
                            </select>
                        </div>
                        <div className="col-12">
                            <label>Description</label>
                        </div>
                        <div className="col-12">
                            <textarea className="col-6" style={{ "height": "300px" }} type="text" name="content" value={this.state.content} onChange={this.handleChange}></textarea>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-success" onClick={this.handleClick}>POST</button>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (

                <Redirect to="/login" />
            )
        }
    }
}
export default CreatePost