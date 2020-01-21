import React, { Component } from 'react'

export default class Notloggedin extends Component {
    render() {
        if(this.props.isSigningUp === false){
        return (
                <div className="col-4 m-auto bg-secondary p-4">
                  <div className="text-center p-4">
                            <h1 className='text-center'>Sign in</h1>
                            <form  className ='myForm' >
                                <div className="form-group row">
                                    <label htmlFor="inputEmail3" className="col-sm-12 col-form-label text-center">
                                      User name or Email address:
                                    </label>
                                    <div className="col-sm-12">
                                        <input type="text"  className="form-control" id="userName" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="inputEmail3" className="col-sm-12 col-form-label center">
                                      Password:
                                    </label>
                                    <div className="col-sm-12">
                                        <input type="text"  className="form-control" id="password" />
                                    </div>
                                </div>
                                <button onClick={this.props.func} type="submit" className = "btn-success btn m-2 p-1">Sign In</button>
                                <button onClick={()=>{this.props.addUser()}} className = "btn-danger btn m-2 p-1">Sign UP</button>

                            </form>
                      </div>
                </div>
        )
        }
       else{
            return(
                <div className="col-4 m-auto bg-secondary p-4">
                <div className="text-center p-4">
                          <h1 className='text-center'>Sign Up</h1>
                          <form  className ='myForm' >
                              <div className="form-group row">
                                  <label htmlFor="inputEmail3" className="col-sm-12 col-form-label text-center">
                                    User name or Email address:
                                  </label>
                                  <div className="col-sm-12">
                                      <input type="text"  className="form-control" id="userName" />
                                  </div>
                              </div>
                              <div className="form-group row">
                                  <label htmlFor="inputEmail3" className="col-sm-12 col-form-label center">
                                    Password:
                                  </label>
                                  <div className="col-sm-12">
                                      <input type="text"  className="form-control" id="password" />
                                  </div>
                              </div>
                              <button onClick={()=>alert('hello')} type="submit" className = "btn-success btn m-2 p-1">Create New User</button>
                              <button onClick={this.props.alreadyMember}>Already have account</button>
                          </form>
                    </div>
              </div>
            )
        }
    }
}
