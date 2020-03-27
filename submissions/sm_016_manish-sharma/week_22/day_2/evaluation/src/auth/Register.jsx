import React from 'react'
import { connect } from 'react-redux'
import {fetchRegister} from '../redux/actions'

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
            username: '',
            mobile: '',
            description: ''
        }
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    register=()=>{
        const {name, email, password, username, mobile, description}= this.state
        const {fetchRegister}= this.props
        let obj={
            name: name,
            email: email,
            password: password,
            username: username,
            mobile: mobile,
            description: description 
          }
        if(obj.name==="" || obj.email==="" || obj.username==="" || obj.password===""){
            alert('Please fill the required fields')
        }
        else{
            fetchRegister(obj)
        }
    }
    render() {
        return (
            <div>
                <div className='m-4 h1 text-center'>Registration</div>
                <div className='card col-6 shadow mx-auto'>
                    <div className='form-group'>
                        <label><small className='text-danger'>*</small>Name:</label>
                        <input className='form-control border-dark' name='name' onChange={this.changeHandler} type='text' />
                    </div>
                    <div className='form-group'>
                        <label><small className='text-danger'>*</small>Email:</label>
                        <input className='form-control border-dark' name='email' onChange={this.changeHandler} type='text' />
                    </div>
                    <div className='form-group'>
                        <label><small className='text-danger'>*</small>Password:</label>
                        <input className='form-control border-dark' name='password' onChange={this.changeHandler} type='text' />
                    </div>
                    <div className='form-group'>
                        <label><small className='text-danger'>*</small>Username:</label>
                        <input className='form-control border-dark' name='username' onChange={this.changeHandler} type='text' />
                    </div>
                    <div className='form-group'>
                        <label>Mobile:</label>
                        <input className='form-control border-dark' name='mobile' onChange={this.changeHandler} type='text' />
                    </div>
                    <div className='form-group'>
                        <label>Description:</label>
                        <input className='form-control border-dark' name='description' onChange={this.changeHandler} type='text' />
                    </div>
                    <div className='text-center'>
                        <div onClick={this.register} className='btn btn-primary'>SIGN UP</div>
                    </div>
                </div>
            </div>
        )
    }
}
// const mapStateToProps = (state) => ({
    
// })

const mapDispatchToProps =dispatch=> ({
    fetchRegister:(a)=>dispatch(fetchRegister(a))  
})

export default connect(null,mapDispatchToProps) (Register)