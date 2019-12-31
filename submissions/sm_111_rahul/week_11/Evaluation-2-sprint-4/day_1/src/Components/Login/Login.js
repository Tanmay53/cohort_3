import React, { Component } from 'react';
import Form from '../Login/Form.js';
import ReactDOM from 'react-dom';
class Login extends Component {
    constructor(props){
       super(props);
       this.state = {
          username : 'Rahul',
          password : 'qwerty'
       }
       this.checkValidation = this.checkValidation.bind(this);
    }
    checkValidation = (u,p) =>{
       if(u == this.state.username && p == this.state.password){
           let auth = <div className="bg-success">SIGN-IN SUCCESSFUL</div>
           ReactDOM.render(auth, document.getElementById('displayValidity'));
       }
    }
    render() { 
        return ( 
        <div id="displayValidity">
          <Form checkValid = {this.checkValidation}/>
        </div>
         );
    }
}
 
export default Login;