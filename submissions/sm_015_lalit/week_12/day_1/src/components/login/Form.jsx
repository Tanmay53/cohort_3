import React from 'react';
class Form extends React.Component{

    render(){
        return(
            <div className="offset-5 mt-3">
                <p className="h4">Sign in</p>
                <label>Username or Email Address</label><br/>
                    <input onChange={this.props.inputX} type="text" name="username" placeholder="masai" /><br/>
                <label className="mt-3">Password</label><br/>
                <input onChange={this.props.inputX} type="text" name="password" placeholder="12345"/> <br/>  
                

            </div>
        )
    }
}
export default Form;