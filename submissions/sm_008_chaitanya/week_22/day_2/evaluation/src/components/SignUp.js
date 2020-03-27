import React from 'react'
import axios from 'axios'

class SignUp extends React.Component{
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

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:8080/auth/register',this.state)
        .then(res=>{
            if(res){
                const response=res.data
                if(response.error===true){
                    alert('User already exists...Proceed to Login!')
                }
                else{
                    alert('Registration Success...Proceed to Login!')
                }
            }
        })
        .catch(error=>console.log(error))
        this.reset()
    }

    reset=()=>{
        this.setState({
            name:'',
            email:'',
            password:'',
            username:'',
            mobile:'',
            description:''
        })
    }
    render(){
        return(
            <React.Fragment>
                <div className="container">
                    <h1 className="text-center mt-4 text-primary font-weight-bold shadow">SignUp Page</h1>
                    <div className="row my-5">
                        <div className="col-10 offset-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 border rounded p-5 shadow">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label className="h5">Name</label>
                                    <input type="text" name="name" onChange={this.handleChange} value={this.state.name} className="form-control" placeholder="Enter Name"/>
                                </div>
                                <div className="form-group"> 
                                    <label className="h5">Email</label>
                                    <input type="text" name="email" onChange={this.handleChange} value={this.state.email} className="form-control" placeholder="Enter Email"/>
                                </div>
                                <div className="form-group">
                                    <label className="h5">Password</label>
                                    <input type="text" name="password" onChange={this.handleChange} value={this.state.password} className="form-control" placeholder="Enter Password"/>
                                </div>
                                <div className="form-group">
                                    <label className="h5">Username</label>
                                    <input type="text" name="username" onChange={this.handleChange} value={this.state.username} className="form-control" placeholder="Enter Username"/>
                                </div>
                                <div className="form-group">
                                    <label className="h5">Mobile</label>
                                    <input type="text" name="mobile" onChange={this.handleChange} value={this.state.mobile} className="form-control" placeholder="Enter Mobile"/>
                                </div>
                                <div className="form-group">
                                    <label className="h5">Description</label>
                                    <input type="text" name="description" onChange={this.handleChange} value={this.state.description} className="form-control" placeholder="Enter Description"/>
                                </div>
                                <div className="text-center">
                                    <button className="btn btn-primary px-5 mt-3">SignUp</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default SignUp