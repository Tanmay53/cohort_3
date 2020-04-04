import React from "react"
import {connect} from "react-redux"
import {login,setUsername} from "../redux/action" 
import {Redirect} from "react-router-dom"

class Login extends React.Component{
  constructor(){
    super()
    this.state = {
      username:'',
      password:''
    }
  }

  handleInputChange = (event) =>{
    this.setState({
      [event.target.name]:event.target.value
    })
  }


  handleLogin = (event) =>{
    event.preventDefault()
    console.log("clicked")
    // const {username,password} = this.state
    const {login,setUsername} = this.props
    login({...this.state})
    setUsername(this.state.username)
  }

  render(){
    const {isLogged,errorMsg} = this.props
    return (
      <>
        <div className="container-fluid row">
          <div className="col-md-4 offset-md-4 col-sm-12 offset-sm-0 card">
            <h5 className="text-center text-danger border-bottom py-3">Login</h5>
            <form id="form-group" onSubmit={this.handleLogin}>

              <label htmlFor="username">User Name :</label>
              <input 
                className="form-control my-3" 
                id="username" 
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChange}
                />

              <label htmlFor="password">Password :</label>
              <input 
                className="form-control my-3" 
                id="password" 
                type="text"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
                />
              <button className="btn btn-dark p-1">Submit</button>
            </form>

            {isLogged && <Redirect to="/"/>}
            
            <p className="text-center text-danger border-bottom py-3">{errorMsg}</p>
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    isLogged : state.isLogged,
    errorMsg : state.errorMsg
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    login : (value)=>dispatch(login(value)),
    setUsername : (name) => dispatch(setUsername(name))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login) 