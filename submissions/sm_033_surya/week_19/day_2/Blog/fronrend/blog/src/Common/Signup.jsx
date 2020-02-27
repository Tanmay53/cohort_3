import React from 'react'
import axios from 'axios'

class Signup extends React.Component {
    constructor(props){
        super(props)
        this.state={
            name:"",
            email:"",
            password:""
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleClick=()=>{
        let temp ={
            name:this.state.name,
            email:this.state.email,
            password:this.state.password
        }
        axios.post('http://localhost:5000/register',temp)
        .then((res)=>{
            console.log(res);
        })
    }
    render() {
        console.log(this.state);
        return (
            <div>
                 <div className="container">
                    <div className = "col-6 offset-3">
                    <div className="col-12 m-2">
                    <label>name:</label>
                    </div>
                    <div className="col-12 m-2">
                        <input className="col-12" name="name" value={this.state.name} onChange={this.handleChange} />
                        </div>
                    <div className="col-12 m-2">
                    <label >email </label>
                    </div>
                    <div className="col-12 m-2">
                        <input className="col-12" name="email" value={this.state.email} onChange={this.handleChange} />
                        </div>
                        <div className="col-12 m-2">
                    <label >password </label>
                    </div>
                    <div className="col-12 m-2">
                        <input className="col-12" name="password" value={this.state.password} onChange={this.handleChange} />
                        </div>
                    <div className="col-12 m-2 text-center">
                    <button onClick={this.handleClick}>Signup</button>
                    </div>
                    </div>
                    </div>
            </div>
        )
    }
}
export default Signup