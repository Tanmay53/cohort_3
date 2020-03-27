import React, { Component } from 'react';
import {connect} from "react-redux";
  import  {loginAdmin} from "../Redux/Actions"

class Login extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       username:"",
       password:""
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const {sendloginDetail} = this.props
    sendloginDetail(this.state)
  }

  
  render() {
    return (
      <div className="container">
      <div className="row m-3">
        <div className="col-6 offset-3 shadow">
          <form className="needs-validation" id="lform" noValidate ref={form => this.form = form}>
            <h2 className="text-center">Login</h2>
        
              <label>Username
              <input type="text"
               className="form-control" 
               id="uname" 
               placeholder="Enter username" 
               onChange={this.handleChange} 
               name="username" 
               value={this.state.username}/>
               </label>
             
              <label >Password

              <input type="password"
               className="form-control"
                id="pwd" 
                placeholder="Enter password" 
                onChange={this.handleChange} 
                value={this.state.password} 
                name="password"/></label>
          
        
           <div>
           <button className="btn btn-outline-info" onClick={this.handleSubmit}> Sign In</button>
           </div>
           

            
          </form>
        </div>
      </div>
    </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendloginDetail:payload => dispatch(loginAdmin(payload))
})


export default connect(null, mapDispatchToProps) (Login)