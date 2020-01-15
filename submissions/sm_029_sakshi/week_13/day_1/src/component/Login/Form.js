import React, { Component } from 'react';


class Form extends Component {
  constructor(props){
    super(props)
    this.state ={
        email:'',
        password:'' 
    }
  }
  //  un=document.getElementById("username").value
  //  ps=document.getElementById("password").value

handleSubmit = (event) =>{
    event.preventDefault()
    let newvalue = {
        email:this.state.email,
        password:this.state.password
    }
    this.props.onSubmit(newvalue)
}

handleChange=(e)=>{
  this.setState({[e.target.name]:e.target.value})
}

    
    render() {
        return (
            <div className="bg-danger col-8 offset-2">
              <form onSubmit={this.handleSubmit}>
  <div className="form-group col-5 offset-4 ">
      <h1 className="mt-5">SIGN IN</h1>
    <label>Username or Email address</label>
    <input type="text" value={this.state.email} name="email" onChange={this.handleChange} className="form-control" id="email" aria-describedby="emailHelp" />
   
  </div>
  <div className="form-group col-5 offset-4 ">
    <label for="exampleInputPassword1">Password</label>
      <a href='https://help.myspace.com/hc/en-us/articles/201956084-Forgot-Password' className="offset-4">Forgot Password</a>
                       
    <input type="password" value={this.state.password} name="password" onChange={this.handleChange} className="form-control" id="password" />
  </div>
 
  <button type="submit" className="btn btn-success col-2 offset-5 mb-5" id="signin">SIGN In</button>
</form>
  </div>
        );
    }
}

export default Form;