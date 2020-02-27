import React from 'react'
import axios from "axios"
import { Link,Connector } from "react-router-dom"
class BlogComments extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 0,
            user_id: 0,
            category_id: 0,
            blogs: [],
            comments: [],
            update: 0,
            change: "",
            comment_id: 0,
        }
    }
    componentDidMount = () => {
        var token = localStorage.getItem("token")
        this.setState({
            id: this.props.match.params.id,
            user_id: this.props.match.params.user_id,
            category_id: this.props.match.params.category_id,
        })
        axios({
            method: 'get',
            url: `http://127.0.0.1:5000/userComments/${this.props.match.params.id}/${this.props.match.params.user_id}/${this.props.match.params.category_id}`,
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(res => this.setState({
                blogs: res.data.items[0]
            }))

        axios({
            method: 'get',
            url: `http://127.0.0.1:5000/blogComments/${this.props.match.params.id}/${this.props.match.params.user_id}/${this.props.match.params.category_id}`,
            headers: { 'Authorization': `Bearer ${token}` }
        })
            // .then(res=>console.log(res))
            .then(res => this.setState({
                comments: res.data.items
            }))

    }
    handleDelete = (i, idx, user_id, category_id) => {
        console.log(idx, user_id, category_id)
        // axios.get(`http://127.0.0.1:5000/DeleteBlog/${idx}/${user_id}/${category_id}`)
        var token = localStorage.getItem("token")
        axios({
            method: 'get',
            url: `http://127.0.0.1:5000/DeleteBlog/${i}/${idx}/${user_id}/${category_id}`,
            headers: { 'Authorization': `Bearer ${token}` }

        })
            .then(res => console.log(res))
    }
    // start from here
    handleUpdate = (i, idx, user_id, category_id) => {
        this.setState({
            update: 1,
            comment_id: i
        })
        // console.log(i,idx,user_id,category_id)
        // var token = localStorage.getItem("token")
        // axios.post(`http://127.0.0.1:5000/UpdateComment/${i}/${idx}/${user_id}/${category_id}`,)
        // .then(res=>console.log(res))
    }
    handleChange = (e) => {
        this.setState({
            change: e.target.value
        })
    }
    Update = () => {
        // var token = localStorage.getItem("token")
        axios.post(`http://127.0.0.1:5000/updateComment/${this.state.comment_id}/${this.state.id}/${this.state.user_id}/${this.state.category_id}`, { "changed": this.state.change })
            .then(res => console.log(res))
    }
    render() {
        console.log(this.state)
        return (
            <React.Fragment>
                <div class="card">
                    <div class="card-header">
                    </div>
                    <div class="card-body">
                        <blockquote class="blockquote mb-0">
                            <p>{this.state.blogs.blog}</p>
                            <footer class="blockquote-footer">Posted on<cite title="Source Title">{this.state.blogs.date}</cite></footer>
                        </blockquote>
                    </div>
                </div>
                <button class="btn btn-primary"><Link to={`/comment/${this.state.id}/${this.state.user_id}/${this.state.category_id}`} style={{ "textDecoration": "none", "color": "white" }}>COMMENT</Link></button>
                <div>
                    {this.state.update == 1 ?
                        <div>
                            <input type="text" onChange={this.handleChange} value={this.state.change} placeholder={this.state.change} />
                            <button onClick={() => this.Update()}>Update Comment</button>
                        </div> :
                        <div>
                            hello
                        </div>}
                    {this.state.comments.map((item, index) => (
                        <div key={index}>
                            <div>Comment No:{index}</div>
                            <p>{item.comment_name}</p>
                            <button class="btn btn-primary" onClick={() => this.handleDelete(item.id, item.blog_id, item.user_id, item.category_id)}>DELETE</button>
                            <button class="btn btn-primary" onClick={() => this.handleUpdate(item.id, item.blog_id, item.user_id, item.category_id)}>UPDATE</button>
                        </div>
                    ))}

                </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default BlogComments