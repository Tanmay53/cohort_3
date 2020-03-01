import React, { Component, useState } from 'react'
import axios from "axios"
import { Link, Redirect } from "react-router-dom"


class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: [],
            blogs: [0]
        }
        console.log(props)
    }
    componentDidMount = async () => {
        var token = localStorage.getItem("token")
        console.log(token)
        await axios({
            method: 'get',
            url: "http://127.0.0.1:5000/userDetails",
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(res => this.setState({
                user: res.data.items[0]
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
    handleDelete = async (id, category_id) => {
        console.log(id,category_id)
        var token = localStorage.getItem("token")
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
    render() {
        console.log(this.state)
        if (localStorage.getItem("token")) {
            return (
                <React.Fragment>
                    <div class="d-flex justify-content-center ">
                        <div class="card mb-3 mt-4 shadow p-3 mb-5 bg-white rounded" style={{ "max-width": "540px" }}>
                            <div class="row no-gutters">
                                <div class="col-md-4">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR6SfAmMZcQUVqw6mfuqa882UiAeFXMg9EMk93NaKTyEJ0f6nyE" class="card-img" alt="User Profile" style={{ "height": "300px" }} />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">NAME -     {this.state.user.name}</h5>
                                        <p class="card-text">EMAIL -      {this.state.user.email}</p>
                                        <p class="card-text">PHONE -      {this.state.user.phone}</p>
                                        <p class="card-text">DOJ -        {this.state.user.DOB}</p>
                                        <p class="card-text">DEPARTMENT - {this.state.user.DEPARTMENT}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h4 class="text-center text-warning">ALL YOUR BLOGS</h4>
                    <div class="overflow-scroll">
                        <div class="container">
                            <div class="row">
                                {this.state.blogs?this.state.blogs.map((blog, index) =>
                                    <div class="card mt-4 col-lg-3 col-md-6 col-sm-12 mx-md-4" key={index}>
                                        <div class="card-header overflow-auto">
                                            <h5 class="float-left">{blog.title}</h5><h5 class="float-right">{blog.name}</h5>
                                        </div>
                                        <div class="card-body">
                                            <blockquote class="blockquote mb-0">
                                                <p>{blog.blog}</p>
                                                <footer class="blockquote-footer">Posted on<cite title="Source Title">{blog.date}</cite></footer>
                                            </blockquote>
                                        </div>
                                        <div class="card-footer text-muted">
                                            <button class="btn btn-primary"><Link to={`/blogComment/${blog.id}/${blog.user_id}/${blog.category_id}`} style={{ "textDecoration": "none", "color": "white" }}>COMMENTS</Link></button>
                                            <button class="btn btn-warning"><Link to={`/update/${blog.id}/${blog.user_id}/${blog.category_id}`}>EDIT</Link></button>
                                            <button class="btn btn-danger" onClick={() => this.handleDelete(blog.id, blog.category_id)}>DELETE</button>
                                        </div>
                                    </div>
                                ):<h1>No Blogs as such</h1>}
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
export default User
