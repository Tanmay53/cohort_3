import React, { Component } from 'react'
import { connect} from 'react-redux'
import axios from 'axios'

class Details extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "",
             email: "",
             profilePic: "",
             flag: false
        }
    }

    showUserProfile = (e) => {
        e.preventDefault()
        // console.log(this.props.ifToken)
        axios
            .get(`http://127.0.0.1:5000/user/details`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + this.props.ifToken
                }
            })
            .then(res => {
                this.setState({
                    name: res.data.name,
                    email: res.data.email,
                    profilePic: res.data.avatar,
                    flag: true
                })
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
    }
    
    render() {
        console.log(this.props.ifToken)
        return (
            this.state.flag ? 
            (
                <div className = "text-center">
                        <div className = "row">
                            <div className = "col-12 display-4">Profile</div>
                            <div className = "col-12">
                                <img src= {this.state.profilePic} style = {{height: "400px", width: "400px", margin: "20px"}} alt= "profileAvatar"/>
                                <h1 className = "m-4">Name: {this.state.name} </h1>
                                <h2 className = "m-4">Email: {this.state.email} </h2>
                            </div>
                        </div> 
                </div>
            ) :
            (
                <div className = "text-center">
                        <div className = "row">
                            <div className = "col-12 display-4">Profile</div>
                            <div className = "col-12">
                                <button onClick = {this.showUserProfile} className = "btn btn-warning m-4 p-2">Show User Details</button>
                            </div>
                        </div> 
                </div>
            )
        
        )
    }
}

const mapStateToProps = (state) => ({
    ifToken: state.ifToken,
    state: state
})

const mapDispatchToProps = (dispatch) => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(Details)