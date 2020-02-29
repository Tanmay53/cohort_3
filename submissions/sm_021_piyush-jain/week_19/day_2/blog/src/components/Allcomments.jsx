import React, { Component } from 'react'
import axios from "axios"
import {Link,Redirect} from "react-router-dom"
class Allcomments extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: [],
            update: 0,
            change: "",
            blogs:[],
            user: 0,
            id:0,
            user_id:0,
            category_id:0
        }
        console.log(props)
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
            .then(res => this.setState({
                comments: res.data.items
            }))

            await axios.post(`http://127.0.0.1:5000/getId`, { "token": token })
            .then(res => this.setState({
                user: Number(res.data)
            }))

    }

    handleDelete = async (i, idx, user_id, category_id) => {
        console.log(idx, user_id, category_id)
        var token = localStorage.getItem("token")
        await axios({
            method: 'get',
            url: `http://127.0.0.1:5000/DeleteBlog/${i}/${idx}/${user_id}/${category_id}`,
            headers: { 'Authorization': `Bearer ${token}` }

        })
            .then(res => console.log(res))

        await axios({
            method: 'get',
            url: `http://127.0.0.1:5000/blogComments/${this.props.match.params.id}/${this.props.match.params.category_id}`,
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(res => this.setState({
                comments: res.data.items
            }))
    }
    handleChange = (e) => {
        this.setState({
            change: e.target.value
        })
    }
    Update = async (id,blog_id,user_id,category_id) => {
        var token = localStorage.getItem("token")
        this.setState({
            comment_id:id
        })
        await axios({
            method: 'post',
            url: `http://127.0.0.1:5000/updateComment/${id}/${this.state.id}/${user_id}/${category_id}`,
            headers: { 'Authorization': `Bearer ${token}` },
            data: {
                "changed": this.state.change
            }
        })
        await axios({
            method: 'get',
            url: `http://127.0.0.1:5000/blogComments/${this.props.match.params.id}/${this.props.match.params.category_id}`,
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(res => this.setState({
                comments: res.data.items
            }))
        this.setState({
            update: 0,
            comment_id:0
        })
    }
    handleUpdate = (i, comment_name) => {
        this.setState({
            update: 1,
            comment_id: i,
            change: comment_name
        })
        console.log(this.state)
    }
    render() {
        console.log(this.state)
        if (localStorage.getItem("token")) {
            return (
                <React.Fragment>
                    <div class="d-flex justify-content-center mt-4">
                        <div class="card " style={{ "width": "75%" }}>
                            <h2 class="card-header">{this.state.blogs.title}
                            </h2>
                            <div class="card-body">
                                <blockquote class="blockquote mb-0">
                                    <p>{this.state.blogs.blog}</p>
                                    <footer class="blockquote-footer">Posted on  <cite title="Source Title">{this.state.blogs.date}</cite></footer>
                                    <button class="btn btn-primary  text-center mt-2"><Link to={`/comment/${this.state.id}/${this.state.user_id}/${this.state.category_id}`} style={{ "textDecoration": "none", "color": "white" }}>COMMENT</Link></button>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div>
                        {this.state.comments.map((item, index) => (
                            <div class="d-flex justify-content-center mt-4" style={{ "minWidth": "400px" }} key={index}>
                                <div key={index} style={{ "border": "1px solid black", "width": "75%" }}>
                                    {this.state.update == 0,this.state.comment_id!=item.id ?
                                        <div>
                                            <div style={{ "width": "100%" }} class="mt-2 clearfix">
                                                <div class="float-left"><p class="text-info lead overflow-auto float-left">{item.comment_name}</p></div>
                                               {this.state.user==item.user_id?<div class="float-right ">
                                                    <button class="btn btn-danger" onClick={() => this.handleDelete(item.id, item.blog_id, item.user_id, item.category_id)}><i class='fas fa-trash' style={{ "font-size": "12px" }}></i></button>
                                                    <button class="btn btn-warning ml-2" onClick={() => this.handleUpdate(item.id, item.comment_name)}><i class='far fa-edit' style={{ "font-size": "12px" }}></i></button>
                                                </div>:<div></div>}
                                            </div>
                                            <div>
                                                <div class="lead float-right clearfix" style={{ "clear": "float" }}><small class=" text-secondary "><small class="text-secondary mr-1" style={{"fontSize":"20px"}}>~</small>{item.COMMENT_PERSON}</small></div>
                                            </div>
                                        </div>
                                        :
                                        <div style={{ "display": "flex" }}>
                                            <div class="float-left" style={{ "flexGrow": "2" }}><textarea rows="1" style={{ "border": "none" }} autoFocus type="text" onChange={this.handleChange} value={this.state.change} placeholder={this.state.change} ></textarea></div>
                                            <div class="float-right ">
                                                <button onClick={() => this.Update(item.id,item.blog_id,item.user_id,item.category_id)} class="btn btn-warning ">UPADTE</button>
                                                <button class="btn btn-danger" onClick={() => this.handleDelete(item.id, item.blog_id, item.user_id, item.category_id)}><i class='fas fa-trash' style={{ "font-size": "15px" }}></i></button>
                                            </div>
                                        </div>}
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
export default Allcomments