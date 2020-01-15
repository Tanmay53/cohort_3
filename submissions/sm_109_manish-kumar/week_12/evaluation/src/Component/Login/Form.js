import React from 'react';

class Form extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username:"",
            password:""
        }
    }

    handleSubmit =(e)=>{
        e.preventDefault();
        this.props.validity(this.state.username, this.state.password)
    }


    handleChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        return (
            <div className = "container">
                <div className = "row">
                    <div className = "col-3"></div>
                    <div className = "col-6">
                        <center><h2 className="display-4">Sign In</h2></center>
                        <form onSubmit = {this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Username</label>
                                <input type="text" 
                                        name = "username"
                                        onChange = {this.handleChange}
                                        vlaue = {this.state.username}
                                        className="form-control" 
                                        id="exampleInputEmail1" 
                                        aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="text"
                                        name = "password"
                                        value = {this.state.password}
                                        onChange = {this.handleChange}
                                        className="form-control" 
                                        id="exampleInputPassword1" />
                            </div>
                            <input type="submit" 
                                    className="btn btn-primary"
                                     />
                        </form>
                    </div>
                    <div className = "col-3"></div>
                </div>
            </div>
        )
    }
}

export default Form;