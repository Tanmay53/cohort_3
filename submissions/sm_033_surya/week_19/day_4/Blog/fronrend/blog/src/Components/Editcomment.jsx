import React, { Component } from 'react'
import axios from 'axios'

export default class Editcomment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            commenttext: "",
            blog_id: ""
        }
    }

    componentDidMount() {
        let token = localStorage.getItem('token')
        axios({
            method: "GET",
            url: `http://localhost:5000/comment/singlecomment/${this.props.match.params.id}`,
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then((res) => {
                console.log(res)
                this.setState({
                    commenttext: res.data[0].content,
                    blog_id: res.data[0].blog_id
                })
            })
    }
    handleChange = (e) => {
        this.setState({
            commenttext: e.target.value
        })
    }
    handleClick = () => {
        let token = localStorage.getItem('token')
        axios({
            method: "POST",
            url: `http://localhost:5000/comment/singlecomment/${this.props.match.params.id}`,
            data: {
                content: this.state.commenttext
            },
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then((res) => {
                this.props.history.push(`/post/${this.state.blog_id}`)
            })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-8 mt-5">
                        <input className="form-control" value={this.state.commenttext} onChange={this.handleChange}></input>
                    </div>
                    <div className="col-4 mt-5">
                        <button className="btn btn-primary " onClick={this.handleClick}>Update</button>
                    </div>
                </div>
            </div>
        )
    }
}
