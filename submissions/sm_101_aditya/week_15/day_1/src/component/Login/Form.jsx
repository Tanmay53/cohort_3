import React from 'react';

class Form extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username:"",
            password:""
        }
    }

    handleSubmit =(event)=>{
        event.preventDefault();
        this.props.validityChecker(this.state.username, this.state.password)
    }


    handleChange = (event)=>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    render() {
        return (
            <div className = "container">   
                <center><h1>Sign In</h1></center>
                <form onSubmit = {this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" 
                                name = "username"
                                onChange = {this.handleChange}
                                vlaue = {this.state.username}
                                className="form-control" 
                                id="username" 
                                    />
                
                    
                        <label htmlFor="password">Password</label>
                        <input type="password"
                                name = "password"
                                value = {this.state.password}
                                onChange = {this.handleChange}
                                className="form-control" 
                                id="password" />
                    </div>
                    <input type="submit" 
                            className="btn btn-danger"
                                />
                </form>                  
            </div>
        )
    }
}

export default Form;