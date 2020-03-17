import React from 'react'
import { connect } from 'react-redux'
import {fetchLogin} from '../redux/actions'
import { Link } from 'react-router-dom'

    class Login extends React.Component{
        constructor(props){
            super(props)
            this.state={
                username:"",
                password:""
            }
        }
        changeHandler=(e)=>{
            this.setState({
                [e.target.name]:e.target.value
            })
        }
        login=()=>{
            const {username,password}=this.state
            const {fetchLogin}=this.props
            let obj={
                username: username,
                password: password
            }
            if(obj.username==="" || obj.password===""){
                alert('Please fill the required fields')
            }
            else{
                fetchLogin(obj)
            }
        }
        render(){
            return (
                <div>
                    <Link to='/register'><div className='btn btn-info offset-3 mt-5'>New User? Register here</div></Link>
                    <div className='m-4 h1 text-center'>Login</div>
                    {/* <Link to='/register'><div className='btn btn-info offset-3 my-2'>New User? Register here</div></Link> */}
                    <div className='card col-6 shadow mx-auto'>
                        <div className='form-group'>
                            <label>Username:</label>
                            <input className='form-control border-dark' name='username' onChange={this.changeHandler} type='text'/>
                        </div>
                        <div className='form-group'>
                            <label>Password:</label>
                            <input className='form-control border-dark' name='password' onChange={this.changeHandler} type='text'/>
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
    
    const mapDispatchToProps =dispatch=> ({
        fetchLogin:(a)=>dispatch(fetchLogin(a))
    })
    
    export default connect(null,mapDispatchToProps) (Login)