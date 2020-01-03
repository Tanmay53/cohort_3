import React from 'react';

class Form extends React.Component {
    constructor(props) {
      super(props);
    }
    // loginMe =() =>{

    // }
    render() {
      return (
            <div className="text-center p-4">
                <h1 className='text-center'>Sign in</h1>
                <form onSubmit={this.props.auth} className ='myForm' >
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
                    <input type="submit" className = "bg-danger"/>
                </form>
          </div>
      );
    }
  }

  export default Form;