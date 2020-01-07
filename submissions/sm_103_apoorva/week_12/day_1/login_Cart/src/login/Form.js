import React from 'react'

class Form extends React.Component{
    constructor(props)
    {
        super(props)

        this.state = {
            username : "",
            password : "",
            form : false
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
        var usrname = this.state.username
        var pass = this.state.password
        if(this.props.username == usrname && this.props.password == pass)
        {
            alert("SIGN-IN SUCCESSFUL")
            this.setState({
                form: true
            })
        }
        else
        {
            alert("tryAgain")
            this.setState({
                form: false
            })
        }
    }
    back=(e)=>
    {
        this.setState({form:false})
    }
    render(){
        return(
            <div className = "bgLogin my-4">
                    <h2 className="mx-2 my-2">Sign In</h2>
                    {this.state.form ? ( 
                        <div>
                            <h2 className="ml-3">Successfull</h2>
                            <button className="ml-3" onClick={this.back}>Go Back</button>
                        </div>
                    ):(
                    <form className= "mx-4" onSubmit={this.submit}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Username or Email address</label>
                            <input onChange={this.handleChange} name = "username" value ={this.state.username} type="email" className="form-control border-danger" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input onChange={this.handleChange} name = "password" value ={this.state.password} type="password" className="form-control border-danger" id="exampleInputPassword1" />
                        </div>
                        <button   type="submit" className="btn loginBtnColor">Submit</button>
                    </form>
                )
                }
            </div>
        )
    }

    
}

export default Form