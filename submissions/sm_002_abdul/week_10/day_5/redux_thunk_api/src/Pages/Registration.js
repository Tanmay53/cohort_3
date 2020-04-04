import React from "react"
import axios from 'axios'

class Registration extends React.Component{
  constructor(){
    super()
    this.state = {
      registeredName:'',
      registeredEmail:'',
      registeredPassword:'',
      registeredUsername:'',
      registeredMobile:'',
      registeredDescription:'',
      messageAfterRegistration:''
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
      name:this.state.registeredName,
      email:this.state.registeredEmail,
      password:this.state.registeredPassword,
      username:this.state.registeredUsername,
      mobile:this.state.registeredMobile,
      description:this.state.registeredDescription,
    })
    .then (resp=>{
      console.log(resp)
      this.setState({
        messageAfterRegistration:resp.data.message
      })
    })

    this.setState({
      registeredName:'',
      registeredEmail:'',
      registeredPassword:'',
      registeredUsername:'',
      registeredMobile:'',
      registeredDescription:''
    })
  }


  render(){
    return (
      <>
        <div className="container-fluid row">
          <div className="col-md-4 offset-md-4 col-sm-12 offset-sm-0 card">
            <h5 className="text-center text-danger border-bottom py-3">REGISTRATION</h5>
            <form className="form-group" onSubmit={this.handleRegistration}>

              <label htmlFor="name">Name :</label>
              <input 
                className="form-control my-3" 
                name="registeredName" 
                type="text" 
                value={this.state.registeredName}
                onChange={this.handleInputChange}/>

              <label htmlFor="email">Email :</label>
              <input 
                className="form-control my-3" 
                name="registeredEmail" 
                type="text" 
                value={this.state.registeredEmail}
                onChange={this.handleInputChange}/>

              <label htmlFor="password">Password :</label>
              <input 
                className="form-control my-3" 
                name="registeredPassword" 
                type="text" 
                value={this.state.registeredPassword}
                onChange={this.handleInputChange}/>

              <label htmlFor="username">User Name :</label>
              <input 
                className="form-control my-3" 
                name="registeredUsername" 
                type="text" 
                value={this.state.registeredUsername}
                onChange={this.handleInputChange}/>

              <label htmlFor="mobile">Mobile :</label>
              <input 
                className="form-control my-3" 
                name="registeredMobile" 
                type="text" 
                value={this.state.registeredMobile}
                onChange={this.handleInputChange}/>

              <label htmlFor="description">Description</label>
              <input 
                className="form-control my-3" 
                name="registeredDescription" 
                type="text" 
                value={this.state.registeredDescription}
                onChange={this.handleInputChange}/>

              <button className="btn btn-dark p-1">Submit</button>

            </form>
            <h5 className="text-center text-success">{this.state.messageAfterRegistration}</h5>
          </div>
        </div>
      </>
    )
  }
}

export default Registration