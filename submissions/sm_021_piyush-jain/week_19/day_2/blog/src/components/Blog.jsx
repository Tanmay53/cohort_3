import React from 'react'
import axios from "axios"
import { Link,Connector } from "react-router-dom"
class Blog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            blogs: []
        }
    }
    componentDidMount = () => {
        var token = localStorage.getItem("token")
        console.log(token)
        axios({
            method: 'get',
            url: "http://127.0.0.1:5000/allBlogs",
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(res => this.setState({
                blogs: res.data.items
            }))
    }
    //     addComment=(id,user,category)=>{
    // console.log(id,user,category)
    // axios.post
    //     }
    render() {
        console.log(this.state.blogs)
        return (
            <React.Fragment>
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
                            <button class="btn btn-primary"><Link to={`/comment/${blog.id}/${blog.user_id}/${blog.category_id}`} style={{ "textDecoration": "none", "color": "white" }}>COMMENT</Link></button>
                        </div>
                    </div>

                )}
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default Blog
