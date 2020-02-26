import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class ViewBlog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            heading: '',
            body: '',
            comment: '',
            related_posts: [],
            comments: []
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClick = (blog_id) => {
        this.props.history.push('/blog/view/' + blog_id)
        // get details of currently selected blog (known from the query string)
        // const blog_id = this.props.match.params['id']
        axios.get('http://localhost:5000/post/blogs/' + blog_id)
        .then(res => {
            this.setState({
                heading: res['data']['data']['heading'],
                body: res['data']['data']['body']    
            })
        })
        .catch(err => {
            console.log(err)
        })

        // get all comments for this blog
        const url = 'http://localhost:5000/post/comments/' + blog_id
        axios.get(url)
        .then(res => {
            this.setState({
                comments: res['data']['data']
            })
        }) 
        .catch(err => {
            console.log(err)
        })
    }

    handlePostComment = () => {
        // post this comment
        const blog_id = this.props.match.params['id']
        const url = "http://localhost:5000/post/comments"

        const data = {
            "blog_id": blog_id,
            "comment": this.state.comment,
            "token": localStorage.getItem('token')
        }

        axios.post(url, data)
        .then(res => {
            this.setState({
                comments: [...this.state.comments, {'comment': this.state.comment}],
                comment: ''
            }) 
        })


    }

    componentWillMount = () => {
        // get details of currently selected blog (known from the query string)
        const blog_id = this.props.match.params['id']
        axios.get('http://localhost:5000/post/blogs/' + blog_id)
        .then(res => {
            this.setState({
                heading: res['data']['data']['heading'],
                body: res['data']['data']['body']    
            })
        })
        .catch(err => {
            console.log(err)
        })

        // get top 7 blogs
        axios.post('http://localhost:5000/post/blogs', {"n":"7"})
        .then(res => {
            this.setState({
                related_posts: res['data']['data']
            })
            console.log(res)
        }) 
        .catch(err => {
            console.log(err)
        })

        // get all comments for this blog
        const url = 'http://localhost:5000/post/comments/' + blog_id
        axios.get(url)
        .then(res => {
            this.setState({
                comments: res['data']['data']
            })
        }) 
        .catch(err => {
            console.log(err)
        })

    }

    render() {
        return (
            <div>
                <div className='row'>
                    <div className='col-md-8 col-xs-12'>
                        <div className="row">
                            <div className='col-12 form-group'>
                                <b><span>{this.state.heading}</span></b>
                            </div>
                            <div className='col-12 form-group'>
                                <span>{this.state.body}</span>
                            </div>
                            <div className='col-12 mt-3'>
                                <h6><b>Comments:</b></h6>
                            </div>

                            {this.state.comments.map((item) => {
                                return <div className='col-12 mt-1'>
                                            <div className='border p-2 mx-2'>
                                                {item.comment}
                                            </div>
                                        </div>
                            })}

                            <div className='col-12 mt-2'>
                                <textarea name="comment" onChange={this.handleChange} value={this.state.comment} className='form-control' rows="2"></textarea>
                            </div>
                            <div className='col-md-4 offset-md-8 col-xs-12 mt-2'>
                                <button onClick={this.handlePostComment} className='btn btn-sm btn-primary form-control'>Leave a comment</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 col-xs-1'>
                        <div className='card m-4 border'>
                            <div className='card-header'>
                                <h5>Related posts</h5>
                            </div>
                            <div className='card-body'>
                                <ul class="list-group">
                                    {this.state.related_posts.map((item)=> {
                                        return <li className="list-group-item"><a href='#' onClick={()=> this.handleClick(item.blog_id)}>{item.heading}</a></li>
                                    })}
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        )
    }

}

export default ViewBlog