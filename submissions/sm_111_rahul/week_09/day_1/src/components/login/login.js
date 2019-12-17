import React from 'react';
import Form from './form.js';

class Login extends React.Component{

     constructor(){
         super(props);
         this.state = {
             userName : 'Rahul',
             password : 'qwerty123'
         }
     }
     checkValidUser (){
         if
         (this.props.user == this.state.userName && 
          this.props.pass == this.state.password){
           validUser = true;
         }else{
           validUser = false;
         }
     } 
     render(){
         
         const isValidUser = this.checkValidUser.validUser;
         if (isValidUser){
             return (<div>Login Successful </div>);
         }else{
             return (<div>Not a valid user</div>);
         }

     }
}
export default Login