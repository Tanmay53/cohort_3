import React from "react";

class Form extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            username:"",
            password:"",
            data : {}

        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    logindata=()=>{
        this.props.userdata(this.state.username,this.state.password)
    }

    render(){
        return(
            <div className="container">
            <div className="col-3">
                <div className="col-12">
                    <label className="m-2">UserName:</label>
                    </div>

                    <div className="col-12">
                        <input  type ="text" name="username" value={this.state.name} onChange={this.handleChange}></input>
                    
                </div>
                <div className="col-12">
                    <label className="m-2">Password:</label>
                    </div>
                    <div className="col-12">
                        <input type ="password" name ="password" value={this.state.name} onChange={this.handleChange}></input>
            
                </div>
                <div className="col-12 m-2 text-center">
                <button className="btn btn-primary" onClick={this.logindata}>Login</button>
                </div>
                </div>


            </div>
        )
    }
}

export default Form