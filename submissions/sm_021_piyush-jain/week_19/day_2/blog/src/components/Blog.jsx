import React from 'react'
import axios from "axios"
import { Link, Connector, Redirect } from "react-router-dom"
class Blog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            blogs: []
        }
        console.log(props)
    }
    componentDidMount = async () => {
        var token = localStorage.getItem("token")
        console.log(token)
        await axios({
            method: 'get',
            url: "http://127.0.0.1:5000/allBlogs",
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(res => this.setState({
                blogs: res.data.items
            }))
    }
    Logout = () => {
        localStorage.clear()
        console.log(this.props)
    }
    render() {
        console.log(this.state.blogs)
        if (localStorage.getItem("token")) {
            return (
                <React.Fragment>
                    <div class="container-fluid">
                        <div class="row">
                            {this.state.blogs.map((blog, index) =>
                                <div class="shadow p-3 mb-5 mt-2 mx-lg-5 bg-white rounded col-lg-3 col-md-6 col-sm-12" key={index}>
                                    <div class="card">
                                        <div class="card-header">
                                            <h4 class="float-left " style={{ "font-size": "24px" }}>{blog.title}</h4><span class="float-right">{blog.name}</span>
                                        </div>
                                        <div class="card-body">
                                            <blockquote class="blockquote mb-0">
                                                <p>{blog.blog}</p>
                                                <footer class="blockquote-footer">Posted on<cite title="Source Title">{blog.date}</cite></footer>
                                            </blockquote>
                                        </div>
                                        <div class="card-footer text-muted clearfix">
                                            <button class="btn btn-primary float-left"><Link to={`/comment/${blog.id}/${blog.user_id}/${blog.category_id}`} style={{ "textDecoration": "none", "color": "white" }}>COMMENT</Link></button>
                                            <button class="btn btn-warning float-right"><Link to={`/Allcomments/${blog.id}/${blog.user_id}/${blog.category_id}`} style={{ "textDecoration": "none", "color": "white" }}>SHOW-ALL</Link></button>
                                        </div>
                                    </div>
                                </div>

                            )}
                        </div>
                    </div>
                </React.Fragment>
            )
        }
        else {
            return (this.props.history.push("/home"))
        }
    }
}
export default Blog
