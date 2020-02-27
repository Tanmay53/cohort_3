import React from 'react'
import axios from 'axios';

export default class Registerx extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:"",
       email:"",
       password:"",
       username:"",
       mobile:"",
       description:""
    };
  };
  handleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  handleSubmit=()=>{
    let datax=this.state
    axios({
      method:"POST",
      url:"http://localhost:8080/auth/register",
      data:datax
    })
    .then(res=>{
      console.log("sign up success",res.data)
    })
    .catch(err=>{
      console.log("sign up failed",err.message)
    })
  }
  
    render() {
        return (
            <html>
              <body >
              <div className="container shadow">
              <h3 className="text-center mt-5">User Sign-up</h3>
               <div className="form-group col-lg-5 col-md-7 mx-auto mt-3 ">
                 <div className="d-flex justify-content-between my-1">
                 <label className="my-auto">Name</label>
                 <input type="text"
                   className="form-control col-9" onChange={this.handleChange} name="name" id=""  placeholder="Eg : MASAI School"/>
                 </div>
                 <div className="d-flex justify-content-between my-1">
                 <label className="my-auto">Email</label>
                 <input type="text"
                   className="form-control col-9" onChange={this.handleChange} name="email" id="" placeholder="Eg : hello@masai.com"/>
                 </div>
                 <div className="d-flex justify-content-between my-1">
                 <label className="my-auto">Password</label>
                 <input type="password"
                   className="form-control col-9" onChange={this.handleChange} name="password" id="" placeholder="Eg : secret"/>
                 </div>
                 <div className="d-flex justify-content-between my-1">
                 <label className="my-auto">Username</label>
                 <input type="text"
                   className="form-control col-9" onChange={this.handleChange} name="username" id="" placeholder="Eg : masai-school"/>
                 </div>
                 <div className="d-flex justify-content-between my-1">
                 <label className="my-auto">Mobile</label>
                 <input type="number"
                   className="form-control col-9" onChange={this.handleChange} name="mobile" id="" placeholder="Eg : 9876543210"/>
                 </div>
                 <div className="d-flex justify-content-between my-1">
                 <label className="my-auto">Description</label>
                 <textarea name="description" className="col-9" onChange={this.handleChange} rows="4" placeholder="Eg : A Transformation in education!"></textarea>
                 </div>
                 <div className="text-center my-3">
                 <button type="button" className="btn btn-outline-secondary" onClick={this.handleSubmit}>Sign Up</button>
                 </div>
               </div> 
            </div>
            </body>
            </html>
        )
    }
}



