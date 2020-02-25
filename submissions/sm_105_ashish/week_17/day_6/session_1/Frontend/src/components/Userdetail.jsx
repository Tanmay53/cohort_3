import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from "react-redux"

 class Userdetail extends Component {
    render() {
        if(this.props.token !==""){
        return (
            <div className="display-1">
                user Detail page
            </div>
        )}
        else{
            return (<Redirect to="/auth/login"/>)
        }
    }
}
const mapStateToProps = (state) => ({
    token : state.token
})

const mapDispatchToProps = {
    
}

export default connect (mapStateToProps,mapDispatchToProps)(Userdetail)

