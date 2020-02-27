import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'

class ManageBlog extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            heading: '',
            body: '',
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleDelete = () => {
        const blog_id = this.props.match.params['id']
        const url = 'http://localhost:5000/post/delete/' + blog_id

        axios.delete(url, {
            data: {
                'token': this.props.token,
                'user_id': this.props.user_id
            }
        })
        .then(res => {
            // console.log(res)
            this.props.history.push('/blog/myblog')
        })
        .catch(err => {
            alert(err)
        })
    }

    handleUpdate = () => {
        const blog_id = this.props.match.params['id']
        const url = 'http://localhost:5000/post/edit/' + blog_id
        const data = {
            'heading': this.state.heading,
            'body': this.state.body,
            'token': this.props.token,
            'user_id': this.props.user_id
        }

        axios.put(url, data)
        .then(res => {
            this.props.history.push('/blog/myblog')
        })
        .catch(err => {
            alert(err)
        })
    }

    componentWillMount = () => {
        // if user is not logged in redirect
        if (this.props.loginStatus === 'Login') {
            this.props.history.push('/user/login')
        }


        const blog_id = this.props.match.params['id']
        axios.get('http://localhost:5000/post/blogs/' + blog_id)
        .then(res => {
            console.log(res)
            this.setState({
                heading: res['data']['data']['heading'],
                body: res['data']['data']['body']    
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
                                <label><b>Blog Heading</b></label>
                                <input name="heading" onChange={this.handleChange} value={this.state.heading} className='form-control' placeholder='Keep a nice and catchy heading' type='text'></input>
                            </div>
                            <div className='col-12 form-group'>
                                <label><b>Blog Content</b></label>
                                <textarea name="body" onChange={this.handleChange} value={this.state.body} placeholder='Write what your heart says !!' className='form-control' rows="15"></textarea>
                            </div>
                            <div className='col-md-4 offset-md-4 col-xs-12'>
                                <button onClick={this.handleDelete} className='btn btn-sm btn-primary form-control'>Delete Post</button>
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <button onClick={this.handleUpdate} className='btn btn-sm btn-primary form-control'>Update Post</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        )
    }

}

const mapStateToProps = (state) => {
    return {
        loginStatus: state.status,
        token: state.token,
        user_id: state.user_id
    }   
}
export default connect(mapStateToProps, null)(ManageBlog)