import React, { Component } from 'react'
import { checkIsLoggedIn, getBlogs } from "../redux/Action"
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'

class Home extends Component {

componentDidMount(){
   this.props.checkIsLoggedIn()
   this.props.getBlogs("http://127.0.0.1:5000/")
}

    render() {

        return (
            <div>
                <div className="text-center m-auto display-1">
                    This is home page
                </div>
            </div>
        )
        }    
}

const mapStateToProps = (state) => ({
    token :state.token
})

const mapDispatchToProps = dispatch => ({
    checkIsLoggedIn:()=>dispatch(checkIsLoggedIn()),
    getBlogs:(payload) => dispatch(getBlogs(payload))
})

export default connect (mapStateToProps,mapDispatchToProps)(Home)
