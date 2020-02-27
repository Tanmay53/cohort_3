import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

export class Blog extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             blogs : [],
             comments: [],
             flag: false,
             comment: "",
             editFlag : false,
             editComment : "",
             id : '',
             username:""
        }
    }

    componentDidMount() {
        if(this.props.loggedIn){
        let id = this.props.match.params.id
        let token = localStorage.getItem("token")
        console.log(id)

        axios.get(`http://127.0.0.1:5000/blog/read/${id}`)
        .then(res => {
        this.setState({
            blogs: res.data.blog
        })
            console.log(res.data.blog)
        })

        axios.get(`http://127.0.0.1:5000/blog/comment/read/${id}`)
        .then(res => {
            this.setState({
                comments: res.data.comments
            })
        })

        axios({
            method: 'get',
            baseURL: 'http://127.0.0.1:5000/user/details',
            headers : { "Authorization" : "Bearer " + JSON.parse(token) }
        })
        .then(res => {
            console.log(res.data.user[0]['username'])
            this.setState({
                username : res.data.user[0]['username']
            })
        } )
    }
    else {
        alert('Log in to see full blog')
    }
    }

    addComment = () => {
        this.setState({
            flag: !this.state.flag
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    add = () => {
        if(this.props.loggedIn){
            let token = localStorage.getItem("token")
            let newComment = {
                comment : this.state.comment,
                blogId : this.props.match.params.id,
                Authorization: "Bearer " + JSON.parse(token)
            }

            axios.post(`http://127.0.0.1:5000/user/blog/comment/create`, newComment)
            .then(res => console.log(res.data.message))
            .then(res => this.getNewComments() )
            this.setState({
                comment : "",
                flag : false
            })
        }
        else {
            alert("For adding a comment you need to login first")
        }
    }

    getNewComments = () => {
        axios.get(`http://127.0.0.1:5000/blog/comment/read/${this.props.match.params.id}`)
        .then(res => {
            this.setState({
                comments: res.data.comments
            })
        })
    }

    editComment = (id, comment) => {
        this.setState({
            editFlag: true,
            editComment: comment,
            id : id
        })
    }

    updateComment = (id) => {
        let data = {
            comment : this.state.editComment
        }
        axios.put(`http://127.0.0.1:5000/user/blog/comment/update/${id}`, data)
            .then(res => console.log(res))
            .then(res => this.getNewComments())
            .then(res => this.setState({ editFlag : false}))
            .catch(err => console.log(err))
    }

    deleteComment = (id) => {
        axios.delete(`http://127.0.0.1:5000/user/blog/comment/delete/${id}`)
            .then(res => console.log(res))
            .then(res => this.getNewComments())
            .catch(err => console.log(err))
    }
    
    render() {
        return (
            <div className="container p-5">
                {
                    this.state.blogs && this.state.blogs.map(blog =>
                        <div key={blog.id}>
                            <div className="h3">{blog.title}</div>
                            <div>{blog.blog}</div>
                            <h6 className="font-weight-bold">Comments : </h6>
                            <div className="">
                                            {
                                                this.state.editFlag
                                                ?
                                                <>
                                                    <input type="text" value={this.state.editComment} name="editComment" onChange={this.handleChange} className='ml-2 my-1 form-control' />
                                                    <button className="btn btn-sm btn-info mx-1" onClick={() => this.updateComment(this.state.id)}>Update comment</button>
                                                    <button className="btn btn-sm btn-danger " onClick={ () => this.setState({ editFlag: false })}>Cancel</button>
                                                </>
                                                :
                                                null
                                            }
                                {
                                    this.state.comments && this.state.comments.map(comment => 
                                        <div key={comment.id}>
                                            <div>{comment.comment} <small className="text-muted"> - {comment.username}</small></div>
                                            {
                                                this.state.username == comment.username 
                                                ?
                                                <>
                                                    <div className="d-flex">
                                                        <small className="text-primary btn btn-sm" onClick={() => this.editComment(comment.id, comment.comment)}>Edit</small>
                                                        <small className="text-danger btn btn-sm" onClick={() => this.deleteComment(comment.id)}>Delete</small>
                                                    </div>
                                                </>
                                            :
                                            null
                                            }
                                            
                                        </div>
                                    )
                                }
                            </div>
                            <button className="btn btn-sm btn-danger my-1" onClick={this.addComment}>Add comment</button>
                            {
                                this.state.flag ?
                                <>
                                <input type="textarea" name="comment" value={this.state.comment} onChange={this.handleChange} placeholder="Write comment...(max 150 charcaters)" className=" my-1 form-control" />
                                <button className="btn btn-sm btn-info my-1" onClick={this.add}>Add</button>
                                </>
                                :
                                null
                            }
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Blog
