import React from 'react'
import Login from './Login'
class Form extends React.Component{
    constructor(props){
    super(props);
    this.state={username:'',password:''};
    this.credentials=[]
}
handlechangeUser=(event)=>{
    this.setState({username:event.target.value});
    this.credentials.push(event.target.value);
}
handlechangePass=(event) =>{
    this.setState({password:event.target.value})
    this.credentials.push(event.target.value);
}

handleSubmit=(event) =>{
    alert("THE INFORMATION IS STORED")
event.preventDefault();
}
render(){
    return (
        <form onSubmit={this.handleSubmit}>
            <label>
                Username:
                <input type ="text" value={this.state.value} onChange={this.handlechangeUser}/>
            </label>
            <label>
                Password:
                <input type ="text" value={this.state.value} onChange={this.handlechangePass}/>
            </label>
            <input type="submit" value="SUBMIT"></input>
            <Login credentials={this.credentials} />

        </form>
    )
}
}
export default Form