import React from 'react';

class Form extends React.Component{
    constructor(){
        this.state ={

        }
    }

    render(){
        return(
            <div>
                <div className="container">
                    <div className ="row">
                        <div className="col align-self-center">
                            <form>
                                <h1>Sign In</h1>
                                <div className="form-group row">
                                    <label for ='userName' className="col-3">
                                        Enter User Name
                                    </label>
                                    <input id="userName" type="text" className="col-9" 
                                     className="form-control" placeholder="User Name Here">
                                    </input>
                                </div>
                                <div className="form-group row">
                                    <label for ='pass' className="col-3">
                                        Enter Password
                                    </label>
                                    <input id="pass" type="password" className="col-9" 
                                      className="form-control" placeholder="Password Here">
                                    </input>
                                </div>
                                <h2>Forgot Password?</h2>
                                <div className="form-group row">
                                    <button className="btn">Sign In</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Form