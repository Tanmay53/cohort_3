import React from 'react'
import axios from "axios"
import { Link, Connector, Redirect } from "react-router-dom"
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
    componentDidMount = async () => {
        var token = localStorage.getItem("token")
        this.setState({
            id: this.props.match.params.id,
            user_id: this.props.match.params.user_id,
            category_id: this.props.match.params.category_id,
        })
        await axios({
            method: 'get',
            url: `http://127.0.0.1:5000/userComments/${this.props.match.params.id}/${this.props.match.params.user_id}/${this.props.match.params.category_id}`,
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(res => this.setState({
                blogs: res.data.items[0]
            }))

        await axios({
            method: 'get',
            url: `http://127.0.0.1:5000/blogComments/${this.props.match.params.id}/${this.props.match.params.category_id}`,
            headers: { 'Authorization': `Bearer ${token}` }
        })
            // .then(res=>console.log(res))
            .then(res => this.setState({
                comments: res.data.items
            }))

    }
    handleDelete = async (i, idx, user_id, category_id) => {
        console.log(idx, user_id, category_id)
        // axios.get(`http://127.0.0.1:5000/DeleteBlog/${idx}/${user_id}/${category_id}`)
        var token = localStorage.getItem("token")
        await axios({
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
    Cancel = () => {
        this.setState({
            update: 0
        })
    }
    handleChange = (e) => {
        this.setState({
            change: e.target.value
        })
    }
    Update = async () => {
        var token = localStorage.getItem("token")
        // axios.post(`http://127.0.0.1:5000/updateComment/${this.state.comment_id}/${this.state.id}/${this.state.user_id}/${this.state.category_id}`, { "changed": this.state.change })
        //     .then(res => console.log(res))

        await axios({
            method: 'post',
            url: `http://127.0.0.1:5000/updateComment/${this.state.comment_id}/${this.state.id}/${this.state.user_id}/${this.state.category_id}`,
            headers: { 'Authorization': `Bearer ${token}` },
            data: {
                "changed": this.state.change
            }
        })
    }
    render() {
        console.log(this.state)
        if (localStorage.getItem("token")) {
            return (
                <React.Fragment>
                    <div class="d-flex justify-content-center mt-4">
                        <div class="card " style={{ "width": "50%" }}>
                            <div class="card-header">{this.state.blogs.title}
                            </div>
                            <div class="card-body">
                                <blockquote class="blockquote mb-0">
                                    <p>{this.state.blogs.blog}</p>
                                    <footer class="blockquote-footer">Posted on<cite title="Source Title">{this.state.blogs.date}</cite></footer>
                                    <button class="btn btn-primary  text-center mt-1"><Link to={`/comment/${this.state.id}/${this.state.user_id}/${this.state.category_id}`} style={{ "textDecoration": "none", "color": "white" }}>COMMENT</Link></button>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div>
                        {this.state.update == 1 ?
                            <div class="d-flex justify-content-center mt-4">
                                <textarea type="text" rows="3" cols="20" onChange={this.handleChange} value={this.state.change} placeholder={this.state.change} />
                                <button onClick={() => this.Update()} class="btn btn-warning">UPADTE</button>
                                <button onClick={() => this.Cancel()} class="btn btn-secondary">CANCEL</button>
                            </div> :
                            <div>
                                <h3 class="text-center">No Comments to be Updated</h3>
                            </div>}
                        {this.state.comments.map((item, index) => (
                            <div class="d-flex justify-content-center mt-4" style={{"minWidth":"400px"}}key={index}>
                                <div key={index} style={{ "border": "1px solid black", "width": "50%" }}>
                                    <div class="text-center lead"><span class="text-danger lead text-center">Comment No:</span>{index}<span class="lead text-success ml-2"><span class="lead mr-3">COMMENT_BY</span></span>{item.COMMENT_PERSON}</div>
                                    <p class="text-info lead overflow-auto">{item.comment_name}</p>
                                    <div class="d-flex justify-content-center mt-4"> <button class="btn btn-danger" onClick={() => this.handleDelete(item.id, item.blog_id, item.user_id, item.category_id)}><i class='fas fa-trash' style={{"font-size":"24px"}}></i></button>
                                        <button class="btn btn-warning ml-2" onClick={() => this.handleUpdate(item.id, item.blog_id, item.user_id, item.category_id)}><i class='far fa-edit' style={{"font-size":"24px"}}></i></button></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </React.Fragment>
            )
        }
        else {
            return (<Redirect to="/home"></Redirect>)
        }
    }
}
export default BlogComments