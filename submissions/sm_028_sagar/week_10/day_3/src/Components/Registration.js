import React, { Component } from 'react'
import {connect} from 'react-redux'
import {registerUser} from '../Redux/actions'
import {Redirect,Route} from 'react-router-dom'
import Routes from '../Routes'

class Registration extends Component{
    constructor(props){
        super(props)
        this.state = {
            name:'sagar',
            email:'sagarK@gmail.com',
            password:'12345',
            username:'sagarK',
            mobile:'121212121',
            description:'Great Being and Wanderer'
        }
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        let newUser = {
            name:this.state.name,
            email:this.state.email,
            password:this.state.password,
            username:this.state.username,
            mobile:this.state.mobile,
            description:this.state.description
        }

        // newUser = JSON.stringify(newUser)
        console.log('submission handled',newUser)
        this.props.postData(newUser)
    }

    render(){
        if(this.props.status === 200){
            console.log('inside redirect')
           return <Redirect to="/login" />  //It is apllied
        }else{
            return (
                <div className='row'>
                    <div className='col-6 border mx-auto my-5'>
                        <h3 className='text-center my-2'>Register Please...</h3>
                        <div className='p-3'>
                            <form onSubmit={(e)=>this.handleSubmit(e)}>
                            <div className="form-row" >
                                <div className="form-group col-md-6">
                                    <label htmlFor="Email">Email</label>
                                    <input onChange={(e)=>this.handleChange(e)} type="email" value={this.state.email} name='email'  className="form-control" id="Email" required/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="password">Password</label>
                                    <input onChange={(e)=>this.handleChange(e)} type="password" value={this.state.password} name='password' className="form-control" id="password" required/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="name">Name</label>
                                    <input onChange={(e)=>this.handleChange(e)} type="text" value={this.state.name} name='name' className="form-control" id="name" required/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="username">Username</label>
                                    <input onChange={(e)=>this.handleChange(e)} type="text" value={this.state.username} name='username' className="form-control" id="username" required/>
                                </div>
                                <div className="form-group col-md-12">
                                    <label htmlFor="mobile">mobile</label>
                                    <input onChange={(e)=>this.handleChange(e)} type="number" value={this.state.mobile} name='mobile' className="form-control" id="mobile" title='Enter 10 Digit mobile number' required/>
                                </div>
                                <div className="form-group col-md-12">
                                    <label htmlFor="description">description</label>
                                    <textarea onChange={(e)=>this.handleChange(e)} type="text" value={this.state.description} name='description' className="form-control" id="description" required/>
                                </div>
                                <div className='form-group m-2'>
                                    <button className='btn btn-primary'>Submit</button>
                                </div>
                            </div>
                            </form>
                            <p className='bg-secondary text-white'>{this.props.alert || this.props.error}</p>
                        </div>
                    </div>
                </div>
            )}
    
        }
    }

const mapStateToProps = state => {
    return {
       alert:state.alert,
       status:state.status
    }
}

const mapDispatchToProps = dispatch =>{
    return {    
        postData: (query)=> dispatch(registerUser(query))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Registration)
