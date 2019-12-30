import React from 'react';
import ReactDOM from 'react-dom';


class Form extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username : '',
            password : ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        // console.log(this.props.login, this.props.psd)
        // alert('this.state.username +" "+ this.props.password')
        let l = this.state.username
        let p = this.state.password
        if(l == this.props.login && p == this.props.psd){
            alert('Successful')
            const elem = (<div><h3 className="text-success text-center">SUCCESSFUL SING-IN</h3></div>)
            ReactDOM.render(elem, document.getElementById('formid'));
        }else{
            alert('Please enter valid username and password')
            const elem = (<div><h3 className="text-success text-center">Please enter valid username and password</h3></div>)
            ReactDOM.render(elem, document.getElementById('formid'));
        }
    }

    render(){
        console.log(this.state)
        return (
            <div className="container">
                <div className="row p-4">
                    <div className="col-4 p-5 bg-light border border-dark rounded mx-auto">
                        {/* form */}
                        <h3 className="font-weight-bold pb-4">Sign in</h3>
                        <form>
                            <div className="form-group">
                                <label><h6 className="font-weight-bold">Username or Email Address</h6></label>
                                <input onChange={this.handleChange} name="username" type="text" className="form-control" id="username"/>
                            </div> 
                            <div className="form-group">
                                <label><h6 className="font-weight-bold">Password</h6></label>
                                <input onChange={this.handleChange} type="passsword" name="password" className="form-control" id="username"/>
                            </div>
                            <div className="form-group">
                                <button onClick={this.onSubmit} className="btn text-center btn-primary px-5"><small className="font-weight-bold">Sign In</small></button>
                            </div>
                        </form>
                    </div>
                    <div className="col-4">
                        <div id='show'>
                            
                        </div>
                    </div>
                </div>
                <br />
                <div className="row p-4">
                    <div className="col-4 p-5 border border-primary  rounded text-center">
                        <h5>Username : sudhir</h5>
                        <h5>Password : sudhir</h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form;