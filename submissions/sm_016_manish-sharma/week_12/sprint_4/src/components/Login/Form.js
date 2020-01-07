import React from 'react'

class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            email:'',
            passw:''
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value,
        })
    }
    
    handleClick=()=>{
        this.props.callback(this.state)
        // console.log(this.state.email, this.state.passw)
    }
    render(){
        return(
            <div className='col-6 m-5 p-5'>
                <h1>Sign in</h1>
                <div className='my-5'>
                    <div className='form-group'>
                        <h5>Username or Email Address</h5>
                        <input name='email' value={this.state.email} onChange={this.handleChange} className='form-control' type='text'/>
                    </div>
                    <div className='form-group'>
                        <h5>Password</h5>
                        <input name='passw' value={this.state.passw} onChange={this.handleChange} className='form-control' type='text'/>
                    </div>
                </div>
                <div onClick={this.handleClick} className='btn text-white col-4a' style={{background:'#E3408C'}}>Sign in</div>
            </div>
        )
    }

}

export default Form