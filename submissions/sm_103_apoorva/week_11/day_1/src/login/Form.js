import React from 'react'

class Form extends React.Component{
    constructor(props)
    {
        super(props)

        this.state = {
            username : "",
            password : ""
        }
    }
    handleChange=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    submit=(event)=>
    {
        event.preventDefault()
        // console.log(this.state)
        console.log(this.props.username)
        console.log(this.props.password)
        var usrname = this.state.username
        var pass = this.state.password
        console.log(usrname,pass)
        if(this.props.username == usrname && this.props.password == pass)
        {
            alert("SIGN-IN SUCCESSFUL")
        }
        else
        {
            alert("tryAgain")
        }
    }
    render(){
        return(
            <div className = "bgLogin my-4">
                <h2 className="mx-2 my-2">Sign In</h2>
                <form className= "mx-4" onSubmit={this.submit}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Username or Email address</label>
                        <input onChange={this.handleChange} name = "username" value ={this.state.username} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input onChange={this.handleChange} name = "password" value ={this.state.password} type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button   type="submit" className="btn loginBtnColor">Submit</button>
                </form>
            </div>
        )
    }

    
}

export default Form