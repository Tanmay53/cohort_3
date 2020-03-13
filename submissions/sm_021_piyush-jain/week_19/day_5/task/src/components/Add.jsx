import React from 'react'
import axios from "axios"
import { Link, Redirect } from "react-router-dom"
import { connect } from 'react-redux'
class Add extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount=()=>{
        
    }
    render() {
        console.log(this.state)
        if(this.props.token)
        {
            return(
                <React.Fragment>

                </React.Fragment>
            )
        }
        else{
            return(<Redirect to="/register"></Redirect>)
        }
    }
}
const mapStateToProps = (state) => ({
    status: state.login,
    token: state.token
})
export default connect(mapStateToProps)(Add)

