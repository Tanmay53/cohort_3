import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import ManageBlogPost from '../component/ManageBlogPost'

class MyBlogs extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            blogs: []
        }
    }

    componentWillMount = () => {
        if (this.props.loginStatus === 'Login') {
            this.props.history.push('/user/login')
        }

        axios.get('http://localhost:5000/post/blogs/user/' + this.props.user_id)
        .then(res => {
            if(res.status == 200) {
                this.setState({
                    blogs: res['data']['data']
                })
                // console.log(res)
            }
        })
        .catch(err => {

        })
    }

    render() {
        return (
            <div className='row card-deck'>
                {this.state.blogs.map((item)=> {
                    return <ManageBlogPost blog={item} />
                })}
            </div>
        )
    }
} 


const mapStateToProps = (state) => {
    return {
        loginStatus: state.status,
        user_id: state.user_id
    }   
}
export default connect(mapStateToProps, null)(MyBlogs)