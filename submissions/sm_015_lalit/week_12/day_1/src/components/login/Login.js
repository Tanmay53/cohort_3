import React from 'react';
import Form from './Form'
import Success from './Success'
class Login extends React.Component{
  constructor(props){
    super(props)
    this.state={
      username:"",
      password:"",
      success:false
    }
  }
  handleLogin=()=>{
    if(this.state.username=="masai" && this.state.password==12345){
      this.setState({
        success:true
      })
    }
    else{
      alert("Incorrect login details")
     
    }
  }
  handleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  render(){
    return(
      <div>
        {(this.state.success) ?  <Success /> : <div><Form inputX={this.handleChange} />
        <button onClick={this.handleLogin} type="button" className="btn btn-primary mt-3 px-4 offset-5">Sign In</button>
        </div>  }
      </div>
    )
  }
}
export default Login;
