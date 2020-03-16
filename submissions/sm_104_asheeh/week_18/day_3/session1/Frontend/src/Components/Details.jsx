import React, { Component } from 'react'
import { connect} from 'react-redux'
import { Redirect } from 'react-router-dom'

class Details extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        // console.log(this.props)
        return (
            // this.props.isLogin ? 
            // (
                <div className = "text-center">
                        <div className = "row">
                            <div className = "col-6 display-4">Profile</div>
                        </div> 
                </div>
            // ) :
            // (
            //     <Redirect to = "/auth/login" />
            // )
        
        )
    }
}

const mapStateToProps = (state) => ({
    isLogin: state.isLogin,
    state: state
})

const mapDispatchToProps = (dispatch) => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(Details)