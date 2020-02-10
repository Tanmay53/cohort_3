import React from 'react'
import { connect } from "react-redux";
import { Redirect } from "react-router-dom"
import { validate } from "../../redux/action"
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "username": "",
            "password": ""
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClick = async () => {
        if (this.state.username == "admin" && this.state.password == "admin") {
            this.props.validate(this.state);
            alert("Login Successfully")
        }
        else
            alert("Enter Correct Credentials")
    }
    render() {
        if (this.props.loginStatus) {
            return (
                <div style={{"margin":"150px 200px 0px 300px","width":"400px","height":"250px","backgroundColor":"pink","padding":"30px"}}>
                    <div >UserName:</div>
                    <input type="text" name="username" onChange={this.handleChange} placeholder="Enter Username/admin" /><br></br>
                    <div >Password:</div>
                    <input type="text" name="password" onChange={this.handleChange} placeholder="Enter Password/admin" /><br></br>
                    <button class="btn btn-primary"onClick={this.handleClick} style={{"margin":"30px 0px 0px 100px"}}>Submit</button>
                </div>
            )
        }
        else {
            return (
                <React.Fragment>
                    <Redirect to="/home"></Redirect>
                </React.Fragment>)
        }
    }
}
const mapStateToProps = (state) => ({
    loginStatus: state.isAuth
})

const mapDispatchToProps = dispatch => {
    return ({
        validate: (data) => dispatch(validate(data))
    })

}
export default connect(mapStateToProps, mapDispatchToProps)(Login)

