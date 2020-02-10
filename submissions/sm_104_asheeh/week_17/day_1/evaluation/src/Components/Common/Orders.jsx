import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'

class Orders extends Component {
    render() {
        if(this.props.isLogin === true) {
            return (
                <div>
                    <h1>Orders Page</h1>
                </div>
            )
        } else {
            return <Redirect to = "/login" />
        }
    }
}

const mapStateToProps = (state) => ({
    isLogin: state.isLogin,
    state: state
})

const mapDispatchToProps = (dispatch) => ({
    // checkUser: (payload) => dispatch(checkUser(payload)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(Orders)

