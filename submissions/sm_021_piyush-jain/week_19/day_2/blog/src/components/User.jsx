import React, { Component, useState } from 'react'
import axios from "axios"
import { Link, Redirect } from "react-router-dom"
import { connect } from 'react-redux'
class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: [],
            blogs: [0],
            image: null,
            id: 0
        }
        console.log(props)
    }

    // function to have initial state filled
    componentDidMount = async () => {
        var token = this.props.token
        console.log(token)
        await axios({
            method: 'get',
            url: "http://127.0.0.1:5000/userDetails",
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(res => this.setState({
                user: res.data.items[0]
            }))

        await axios.post("http://127.0.0.1:5000/getId", { "token": this.props.token })
            .then(res => this.setState({
                id: res.data
            }))


        await axios({
            method: 'get',
            url: "http://127.0.0.1:5000/userBlogs",
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(res => this.setState({
                blogs: res.data.items
            }))

    }

    // function to delete a blog
    handleDelete = async (id, category_id) => {
        console.log(id, category_id)
        var token = this.props.token
        await axios({
            method: 'get',
            url: `http://127.0.0.1:5000/deleteBlog/${id}/${category_id}`,
            headers: { 'Authorization': `Bearer ${token}` }
        })

        await axios({
            method: 'get',
            url: "http://127.0.0.1:5000/userBlogs",
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(res => this.setState({
                blogs: res.data.items
            }))

    }

    // function to set the image
    handleChange = (e) => {
        this.setState({
            image: e.target.files[0]
        })
    }

    // function to append the image
    handleClick = async() => {
        var token = this.props.token
        let file = this.state.image
        let formdata = new FormData()
        formdata.append('image', file)
        await axios({
            method: 'POST',
            url: `http://127.0.0.1:5000/auth/userProfile/${this.state.id}`,
            headers: { 'Authorization': `Bearer ${token}` },
            data: formdata
        })
            .then((res) =>
                axios({
                    method: 'get',
                    url: "http://127.0.0.1:5000/userDetails",
                    headers: { 'Authorization': `Bearer ${token}` }
                })
                    .then(res => this.setState({
                        user: res.data.items[0]
                    })),


                axios({
                    method: 'get',
                    url: "http://127.0.0.1:5000/userBlogs",
                    headers: { 'Authorization': `Bearer ${token}` }
                })
                    .then(res => this.setState({
                        blogs: res.data.items
                    }))
            )
    }


    render() {
        console.log(this.state)
        if (this.props.token) {
            return (
                <React.Fragment>
                    <div class="d-flex justify-content-center ">
                        <div class="card mb-3 mt-4 shadow p-3 mb-5 bg-white rounded" style={{ "max-width": "690px" }}>
                            <div class="row no-gutters">
                                <div class="col-md-4 d-flex justify-content-center">
                                    <img src={`http://127.0.0.1:5000/static/${this.state.user.image}`} class="rounded-circle align-items-center mt-5" style={{ "height": "150px", "width": "150px" }}></img></div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title my-3">Name - {this.state.user.name}</h5>
                                        <h5 class="card-text my-3">Email - {this.state.user.email}</h5>
                                        <h5 class="card-text my-3">Phone - {this.state.user.phone}</h5>
                                        <h5 class="card-text my-3">DOJ - {this.state.user.DOB}</h5>
                                        <h5 class="card-text my-3">Department - {this.state.user.DEPARTMENT}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="clearfix d-flex justify-content-center my-3">
                        <div class="float-left"><input type="file" name="file" onChange={(e) => this.handleChange(e)}></input><button onClick={this.handleClick} class="btn btn-danger">ADD</button></div>
                    </div>
                    <h4 class="text-center">ALL YOUR BLOGS</h4>
                    <div class="overflow-scroll">
                        <div class="container-fluid">
                            <div class="row">
                                {this.state.blogs ? this.state.blogs.map((blog, index) =>
                                    <div class="card mt-3 col-lg-4 col-md-6 col-sm-12" key={index}>
                                        <div class="card-header overflow-auto bg-dark text-white">
                                            <h5 class="float-left">{blog.title}</h5><h5 class="float-right">{blog.name}</h5>
                                        </div>
                                        <div class="card-body">
                                            <blockquote class="blockquote mb-0">
                                                <p>{blog.blog}</p>
                                                <footer class="blockquote-footer">Posted on <cite title="Source Title">{blog.date}</cite></footer>
                                            </blockquote>
                                        </div>
                                        <div class="card-footer text-muted d-flex justify-content-around bg-dark">
                                            <button class="btn btn-outline-primary  text-light"><Link to={`/blogComment/${blog.id}/${blog.user_id}/${blog.category_id}`} style={{ "textDecoration": "none", "color": "white" }}>COMMENTS</Link></button>
                                            <button class="btn btn-outline-warning text-light"><Link to={`/update/${blog.id}/${blog.user_id}/${blog.category_id}`} style={{ "color": "white" }}>EDIT</Link></button>
                                            <button class="btn btn-outline-danger text-light" onClick={() => this.handleDelete(blog.id, blog.category_id)}  >DELETE</button>
                                        </div>
                                    </div>
                                ) : <h1>No Blogs as such</h1>}
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )
        }
        else {
            return (<Redirect to="/home"></Redirect>)

        }
    }
}
const mapStateToProps = (state) => ({
    status: state.login,
    token: state.token
})

export default connect(mapStateToProps)(User)
