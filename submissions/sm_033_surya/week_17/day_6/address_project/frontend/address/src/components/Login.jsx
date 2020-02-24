import React from 'react'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'

class Login extends React.Component {
        constructor(props){
            super(props)
            this.state={
                email:"",
                password:""
            }
        }
        handleChange=(e)=>{
            this.setState({
                [e.target.name]:e.target.value
            })
        }
        userdata=()=>{
            this.props.data(this.state.email,this.state.password)
        }
    render() {
        if(!this.props.isAuth){
        return (
            <div>
                <div className="container">
                    <div className="offset-3"><h3>Login</h3></div>
                    <div className = "col-6 offset-3">
                    <div className="col-12 m-2">
                    <label >Email </label>
                    </div>
                    <div className="col-12 m-2">
                        <input className="col-12" name="email" value={this.state.email} onChange={this.handleChange} />
                        </div>
                        <div className="col-12 m-2">
                    <label >password </label>
                    </div>
                    <div className="col-12 m-2">
                        <input className="col-12" name="password" type="password" value={this.state.password} onChange={this.handleChange} />
                        </div>
                    <div className="col-12 m-2 text-center">
                    <button onClick={this.userdata}>Login</button>
                    </div>
                    </div>
                    <div className="text-center">
                <div>Not a Member? please <Link to="/signin">Signup here</Link></div>
                </div>
                    </div>
            </div>
        )
        }
        else {
            return (
                <Redirect to ="/" />
            )
        }
    }
}
export default Login