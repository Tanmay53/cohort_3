import React from 'react'

class Form extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username:'',
            password:''
        }
    }

    usernameChange = (e) =>{
        this.setState({
            username:e.target.value
        })
    }

    passwordChange = (e) =>{
        this.setState({
            password:e.target.value
        })
    }

    handleClick = () =>{
        this.props.onCredentialChange(this.state.username, this.state.password)
    }


    render(){
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col-3'></div>
                    <div className='col-6'>
                        <h1>Sign in</h1>
                        <form action='#'>
                        <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Username or Email Address</label>
                        <input type="text" className="form-control" value={this.state.username} onChange={this.usernameChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" value={this.state.password} onChange={this.passwordChange} id="exampleInputPassword1" />
                        </div>
                        <button type="submit" onClick={this.handleClick} className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                    <div className='col-3'></div>
            </div>
          </div>
        )
    }
}


export default Form