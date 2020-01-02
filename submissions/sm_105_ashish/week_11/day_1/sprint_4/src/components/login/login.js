import React from  'react';
import ReactDOM from 'react-dom';
import Form from './form'

class   LoginForm extends React.Component {
      constructor(){
            super()
            this.state={
                  fakeUser:"Ashish379k",
                  fakePassword:"akv12345"
            }
      }
      checkValidity=(e)=>{
            e.preventDefault()
            let uN= document.getElementById('userName').value
            let pass= document.getElementById('password').value
             if(this.state.fakeUser==uN && this.state.fakePassword==pass){
              let Elem=(<div className ="m-auto text-center text-success"><h1>SIGN-IN SUCCESSFULL</h1></div>)
             ReactDOM.render(Elem, document.getElementById('myForm'));
              }
              else{
                    alert('Invalid username or password')
              }
      }
   render(){
        return(
      <div className="border m-auto text-center" id="myForm">
            <Form user={this.state.fakeUser} pwd ={this.state.pwd} auth={this.checkValidity}/>

      </div>
            )
      }
}
export default LoginForm;