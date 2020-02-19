import React from 'react'
import { connect } from 'react-redux'
import {fetchData1} from '../../redux/actions'
import { Link } from 'react-router-dom'

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:''
        }
    }
    changeHandler=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    login=()=>{
        let obj={
            "username": this.state.username,
            "password": this.state.password
        }
        this.props.fetchData1(obj)
    }
    render(){
        return(
            <div>
                {this.props.error==true?
                (<>
                <Link to='/register'><div className='btn btn-primary offset-3 mb-5'>New user? Register here</div></Link>
                </>):
                (<>
                <Link to='/'><div className='btn btn-success offset-3 mb-5'> ⬅ Go To Dashboard</div></Link>
                </>)

                }
                <div className='h2 text-primary text-center'>LOG IN</div>
                <div className='card col-6 shadow mx-auto'>
                    <div className='form-group'>
                        <label>Username:</label>
                        <input className='input-group' onChange={this.changeHandler} name='username' type='text' />
                    </div>
                    <div className='form-group'>
                        <label>Password:</label>
                        <input className='input-group' onChange={this.changeHandler} name='password' type='text' />
                    </div>
                    <div className='text-center'>
                        <div onClick={this.login} className='btn btn-primary'>LOG IN</div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {error:state.dataLogin.error}
}

const mapDispatchToProps =(dispatch)=> {
    return{
        fetchData1:(a)=>dispatch(fetchData1(a))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Login)