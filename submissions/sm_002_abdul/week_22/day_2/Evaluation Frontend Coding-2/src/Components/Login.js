import React from 'react'
import axios from 'axios'

class Login extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      login:false,
      regName:'',
      regEmail:'',
      regPassword:'',
      regUsername:'',
      regMobile:'',
      regDescription:'',
      messageAfterRegistration:'',
      loginUsername:'',
      loginPassword:''
    }
  }

  handleInputChange = (event) =>{
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  handleRegistration = (event) =>{
    event.preventDefault()
    axios.post('http://localhost:8080/auth/register',{
      name:this.state.regName,
      email:this.state.regEmail,
      password:this.state.regPassword,
      username:this.state.regUsername,
      mobile:this.state.regMobile,
      description:this.state.regDescription,
    })
    .then (resp=>{
      //console.log(resp)
      this.setState({
        messageAfterRegistration:resp.data.message
      })
    })

    this.setState({
      regName:'',
      regEmail:'',
      regPassword:'',
      regUsername:'',
      regMobile:'',
      regDescription:''
    })
  }

  handleLogin = (event) =>{
    event.preventDefault()
    axios.post('http://localhost:8080/auth/login',{
      username:this.state.loginUsername,
      password:this.state.loginPassword
    })
    .then (resp=>{
      if (resp.data.error===false){
        this.setState({
          login:true
        })
        this.props.handleLogin(this.state.login)
      }
    })
  }

  render(props){
    return (
      <>
        <div className="container-fluid row">
          <div className="col-md-4 offset-md-1 col-sm-12 offset-sm-0 card">
            <h5 className="text-center text-danger border-bottom py-3">If you are a new user, Please register yourself</h5>
            <form className="form-group" onSubmit={this.handleRegistration}>

              <label htmlFor="name">Name :</label>
              <input 
                className="form-control my-3" 
                name="regName" 
                type="text" 
                value={this.state.regName}
                onChange={this.handleInputChange}/>

              <label htmlFor="email">Email :</label>
              <input 
                className="form-control my-3" 
                name="regEmail" 
                type="text" 
                value={this.state.regEmail}
                onChange={this.handleInputChange}/>

              <label htmlFor="password">Password :</label>
              <input 
                className="form-control my-3" 
                name="regPassword" 
                type="text" 
                value={this.state.regPassword}
                onChange={this.handleInputChange}/>

              <label htmlFor="username">User Name :</label>
              <input 
                className="form-control my-3" 
                name="regUsername" 
                type="text" 
                value={this.state.regUsername}
                onChange={this.handleInputChange}/>

              <label htmlFor="mobile">Mobile :</label>
              <input 
                className="form-control my-3" 
                name="regMobile" 
                type="text" 
                value={this.state.regMobile}
                onChange={this.handleInputChange}/>

              <label htmlFor="description">Description</label>
              <input 
                className="form-control my-3" 
                name="regDescription" 
                type="text" 
                value={this.state.regDescription}
                onChange={this.handleInputChange}/>

              <button className="btn btn-dark p-1">Submit</button>

            </form>
            <h5 className="text-center text-success">{this.state.messageAfterRegistration}</h5>

          </div>

          <div className="col-md-4 offset-md-1 col-sm-12 offset-sm-0 card">
            <h5 className="text-center text-danger border-bottom py-3">Please Log in; If you have an account with us</h5>
            <form id="form-group" onSubmit={this.handleLogin}>

              <label htmlFor="username">User Name :</label>
              <input 
                className="form-control my-3" 
                id="username" 
                type="text"
                name="loginUsername"
                value={this.state.loginUsername}
                onChange={this.handleInputChange}
                />

              <label htmlFor="password">Password :</label>
              <input 
                className="form-control my-3" 
                id="password" 
                type="text"
                name="loginPassword"
                value={this.state.loginPassword}
                onChange={this.handleInputChange}
                />

              <button className="btn btn-dark p-1">Submit</button>

            </form>
          </div>
        </div>
      </>
    )
  }
}

export default Login

