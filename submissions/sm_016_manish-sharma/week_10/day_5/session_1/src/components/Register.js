import React from 'react'
import { connect } from 'react-redux'
import {fetchDataRegister} from '../redux/actions'
import { Link } from 'react-router-dom'

class Register extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            email:'',
            password:'',
            username:'',
            mobile:'',
            description:''
        }
    }
    changeHandler=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    signup=()=>{
        this.props.fetchDataRegister(this.state)
    }
    render(){
        return(
            <div>
                <h3 className='mx-auto'>Registration</h3>
                {this.props.dataRegister==false?
                <Link to='/'><div className='btn btn-success'>Login Now</div></Link>:
                <p></p>
                }
                <div className='card col-6 shadow mx-auto'>
                    <div className='form-group'>
                        <label>Name:</label>
                        <input className='input-group' onChange={this.changeHandler} name='name' type='text' />
                    </div>
                    <div className='form-group'>
                        <label>Email:</label>
                        <input className='input-group' onChange={this.changeHandler} name='email' type='text' />
                    </div>
                    <div className='form-group'>
                        <label>Password:</label>
                        <input className='input-group' onChange={this.changeHandler} name='password' type='text' />
                    </div>
                    <div className='form-group'>
                        <label>Username:</label>
                        <input className='input-group' onChange={this.changeHandler} name='username' type='text' />
                    </div>
                    <div className='form-group'>
                        <label>Mobile:</label>
                        <input className='input-group' onChange={this.changeHandler} name='mobile' type='text' />
                    </div>
                    <div className='form-group'>
                        <label>Description:</label>
                        <input className='input-group' onChange={this.changeHandler} name='description' type='text' />
                    </div>
                    <div className='text-center'>
                        <div onClick={this.signup} className='btn btn-primary'>SIGN UP</div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        dataRegister:state.dataRegister.error
    }
}

const mapDispatchToProps =dispatch =>{
    return{
        fetchDataRegister:(a)=>dispatch(fetchDataRegister(a))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Register)