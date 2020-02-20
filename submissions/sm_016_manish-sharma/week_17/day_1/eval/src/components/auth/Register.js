import React from 'react'
import { connect } from 'react-redux'
import {fetchData2} from '../../redux/actions'
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
        let obj={
            "name": this.state.name,
            "email": this.state.email,
            "password": this.state.password,
            "username": this.state.username,
            "mobile": this.state.mobile,
            "description": this.state.description 
          }
        this.props.fetchData2(obj)
    }
    render(){
        return(
            <div>
                {this.props.error==true?
                (<></>):
                (<>
                <Link to='/'><div className='btn btn-success offset-3 mb-5'> ⬅ Go To Dashboard</div></Link>
                </>)
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
    return{error:state.dataReg.error}
}

const mapDispatchToProps =dispatch=> {
    return{
        fetchData2:(a)=>dispatch(fetchData2(a))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Register)