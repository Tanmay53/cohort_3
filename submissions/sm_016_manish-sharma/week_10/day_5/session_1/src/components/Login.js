import React from 'react'
import {fetchDataLogin} from '../redux/actions'
import { connect } from 'react-redux'
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
            username:this.state.username,
            password:this.state.password
        }
        this.props.fetchDataLogin(obj)
    }
    render(){
        return(
            <div>
                <div className='m-5'>
                    <Link to='/register'> <div className='btn btn-primary'>Register from here</div></Link>
                </div>
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
// const mapStateToProps = (state) => ({
    
// })
const mapDispatchToProps =dispatch=> {
    return {
        fetchDataLogin:(a)=>dispatch(fetchDataLogin(a))
    }
}

export default connect(null, mapDispatchToProps)(Login)