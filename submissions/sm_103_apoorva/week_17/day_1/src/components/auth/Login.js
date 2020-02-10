import React from 'react'
import { connect } from 'react-redux';
import axios from 'axios'
import {login} from '../../Redux/Action'
import {Redirect} from 'react-router-dom'
class Login extends React.Component{
  constructor(props)
    {
        super(props)
        this.state={
          name: "",
          email: "",
          password: "",
          username: "",
          mobile: "",
          description: "",
        }
    }

    handleChange=(event)=>{
      this.setState({
          [event.target.name]: event.target.value
      });
    }

    handleClick = (e) =>{
      e.preventDefault()
      let username = this.state.username
      let password = this.state.password
      axios.post('http://localhost:8080/auth/login',{
            username : username,
            password : password
        }).then
        (res =>
            // console.log(res.data.token,res.status),
            this.props.login({
              token :res.data.token,
              status : res.status})
        ).catch(error => alert("Enter Your credential properly or sign up if new user"))
    }

    signUp = (e) => {
      e.preventDefault()
      let name = this.state.name
      let email = this.state.email
      let username = this.state.username
      let password = this.state.password
      let mobile = this.state.mobile
      let description = this.state.description
      axios.post('http://localhost:8080/auth/register',{
            name : name,
            email : email,
            password : password,
            username : username,
            mobile : mobile,
            description : description
        }).then
        (res =>
            console.log(res),
            
        ).catch(error => console.log(error))

    }

    signOut = (e) => {
      e.preventDefault()
    }
  render(){
    return (
      this.props.form ? (<Redirect to="/" />)
      :(
      <div>
        <div className="row">
          <div className="col">
            <div className="bgLogin mt-5">
              <h3 className="text-center mt-1">SignIn Form</h3>
              <div className="mx-3">
                  <label className="ml-1 mt-2">Username</label>
                  <input className="form-control" onChange={this.handleChange} type="text" name="username" placeholder="Enter username" />
              </div>
              <div className="mx-3">
                  <label className="ml-1 mt-2">Password</label>
                  <input className="form-control" onChange={this.handleChange} type="password" name="password" placeholder="Enter password" />
              </div>
              <button className="btn btn-primary mt-3 ml-3 mb-3" onClick={this.handleClick}>Sign In</button>
            </div>
          </div>
          <div className="col">
            <div className="bgLogin mt-5">
              <h3 className="text-center mt-1">SignUp Form</h3>
              <div className="mx-3">
                  <label className="ml-1 mt-3">Name</label>
                  <input className="form-control" onChange={this.handleChange} type="text" name="name" placeholder="Enter name" />
              </div>
              <div className="mx-3">
                  <label className="ml-1 mt-2">Email</label>
                  <input className="form-control" onChange={this.handleChange} type="email" name="email" placeholder="Enter email id" />
              </div>
              <div className="mx-3">
                  <label className="ml-1 mt-2">Password</label>
                  <input className="form-control" onChange={this.handleChange} type="password" name="password" placeholder="Enter password" />
              </div>
              <div className="mx-3">
                  <label className="ml-1 mt-2">Username</label>
                  <input className="form-control" onChange={this.handleChange} type="text" name="username" placeholder="Enter username" />
              </div>
              <div className="mx-3">
                  <label className="ml-1 mt-2">Mobile</label>
                  <input className="form-control" onChange={this.handleChange} type="number" name="mobile" placeholder="Enter Mobile no." />
              </div>
              <div className="mx-3">
                  <label className="ml-1 mt-2">Description</label>
                  <input className="form-control" onChange={this.handleChange} type="text" name="description" placeholder="Enter description" />
              </div>
              <button className="btn btn-primary mt-3 ml-3 mb-3" onClick={this.signUp}>Sign Up</button>
            </div>
          </div>
        </div>
        <button className="btn btn-primary ml-5" onClick={this.signOut}>Sign Out</button>
      </div>
      )
    )
  }
}

const mapStateToProps = (state) => ({
  form: state.form,
  token : state.token
})

const mapDispatchToProps = (dispatch) => ({
  login : (payload) => (dispatch(login(payload))),
})

export default connect(mapStateToProps,mapDispatchToProps) (Login)
