import React from'react'


export default class Form extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            username:'',
            password:'',
            
        }
    }

        handleClick=(e)=>{
            if(this.state.username === 'admin' && this.state.password === 'admin')
            {
             alert("SignIN Successfull")
            }
            else
            {
                alert("Invalid credentials")
            }

        }

    
    render(){
        return(
            <div>
                <div className="form-group container col-4 border border-rounded abc">
                <h4 className="font-weight-bold my-5">Sign in</h4>

                <label className="font-weight-bold"> Username or Email Address</label>
                <input type="username" name="username" className="form-control" id="uid" onChange={(e) => this.setState({username:e.target.value}) }/>


                <label  className="font-weight-bold">Password</label><a className="ml-5 float-right"id="fp" href="">Forgot Password ?</a>
                <input type="password" name="password" className="form-control " id="pwd" onChange={(e) => this.setState({password:e.target.value})}/>
               
                <button className="btn btn-primary btn-lg btn-rounded my-5" onClick={(e)=> this.handleClick(e) } > Sign IN</button>
               
                <h1 className="successfull"></h1>
                </div>
                
            </div>
        )
    }
}