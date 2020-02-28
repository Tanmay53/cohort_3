import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    componentDidMount() {
        const blogs_url = `http://127.0.0.1:5000/`
        this.props.getBlogs(blogs_url)
    }


    
    render() {
        return (
            <div className = "text-center">
                <h1>Blogs</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({
    getBlogs: (payload) => dispatch(getBlogs(payload))
})

export default connect (mapStateToProps, mapDispatchToProps)(Home)

