import React, { Component } from 'react'
import axios from "axios"
import { Link, Connector } from "react-router-dom"
class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: [],
            blogs: []
        }
    }
    componentDidMount = () => {
        var token = localStorage.getItem("token")
        console.log(token)
        axios({
            method: 'get',
            url: "http://127.0.0.1:5000/userDetails",
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(res => this.setState({
                user: res.data.items[0]
            }))


        axios({
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
        return (
            <React.Fragment>
                <div style={{ "textAlign": "center", "float": "left" }}>
                    <div class="card mb-3" style={{ "max-width": "540px" }}>
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR6SfAmMZcQUVqw6mfuqa882UiAeFXMg9EMk93NaKTyEJ0f6nyE" class="card-img" alt="User Profile" style={{ "height": "300px" }} />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">NAME - {this.state.user.name}</h5>
                                    <p class="card-text">EMAIL - {this.state.user.email}</p>
                                    <p class="card-text">PHONE - {this.state.user.phone}</p>
                                    <p class="card-text">DOJ - {this.state.user.DOB}</p>
                                    <p class="card-text">DEPARTMENT - {this.state.user.DEPARTMENT}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>ALL YOUR BLOGS</div>
                <div class="overflow-scroll">
                    {this.state.blogs.map(blog =>
                        <div class="card">
                            <div class="card-header">
                                {blog.title}
                            </div>
                            <div class="card-body">
                                <blockquote class="blockquote mb-0">
                                    <p>{blog.blog}</p>
                                    <footer class="blockquote-footer">Posted on<cite title="Source Title">{blog.date}</cite></footer>
                                </blockquote>
                            </div>
                            <div class="card-footer text-muted">
                                <button class="btn btn-primary"><Link to={`/blogComment/${blog.id}/${blog.user_id}/${blog.category_id}`} style={{ "textDecoration": "none", "color": "white" }}>SHOW COMMENT's</Link></button>
                            </div>
                        </div>

                    )}
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default User
