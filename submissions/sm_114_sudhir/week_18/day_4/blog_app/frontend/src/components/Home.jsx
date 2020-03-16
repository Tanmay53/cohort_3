import React, { Component } from 'react'
import { checkIsLoggedIn, getBlogs } from "../redux/Action"
import {connect} from 'react-redux'
import Cards from './Cards'
import { Redirect } from 'react-router-dom'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
                     
        }
    }
    

    componentDidMount(){
        this.props.checkIsLoggedIn()
        this.props.getBlogs("http://127.0.0.1:5000/")
    }

    render() {
        console.log(this.props.blogs.Blogs)
        // this.props.blogs.map(ele => console.log(ele))
        if (this.props.blogs.Blogs){
            return (
                <div>
                    
                    <div className="container">
                        <div className="row">
                            {this.props.blogs.Blogs.map(blog => (<Cards blog = {blog} />))}
                            {/* <Cards /> */}
                        </div>
                    </div>
                </div>
            )
        }else {
            return (
                <div className="text-center m-auto display-1">
                    This is homedsfa page
                </div>
            )
        }
    }    
}

const mapStateToProps = (state) => ({
    token :state.token,
    blogs: state.blogs
})

const mapDispatchToProps = dispatch => ({
    checkIsLoggedIn:()=>dispatch(checkIsLoggedIn()),
    getBlogs:(payload) => dispatch(getBlogs(payload))
})

export default connect (mapStateToProps,mapDispatchToProps)(Home)
