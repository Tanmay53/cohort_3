import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from 'axios'
import swal from 'sweetalert';
import {Link} from 'react-router-dom'


export class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "",
        email: "",
        mobile: "",
        age: "",
      }
  }
  handleChange = e => {
    this.setState({
        [e.target.name]: e.target.value
      })
  };

  submit = () => {
    const {name, email, mobile, age}= this.state
    if(name=="" || email=="" || mobile=="" || age==""){
      swal({
        title: `All input field mendotary to fill`,
        icon: "warning",
        button: "Ops! Ok.",
      })
    }
    else{
      const config = {   
        method: 'POST',
        url: '/create',
        baseURL:"http://127.0.0.1:5000",
        headers: {'Content-Type': 'application/json'},
        data:{...this.state}}
        axios(config).then(res=>{
            swal({
                title: `${res.data.message}`,
                icon: "success",
                button: "Yeyy! Ok.",
              });
        })

    }
    
  };
  render() {
    return (
      <div className="container d-flex justify-content-center align-items-center p-5">
        <form className="flex-column col-md-5 col-12 bg-light  border p-2 d-flex">
          <h2 className="text-center text-danger">Add User</h2>
          <TextField
            className=" m-2"
            id="outlined-basic"
            onChange={this.handleChange}
            name="name"
            label="Name"
            variant="outlined"
          />
          <TextField
            className=" m-2"
            id="outlined-basic"
            onChange={this.handleChange}
            name="email"
            label="Email"
            variant="outlined"
          />
          <TextField
            className=" m-2"
            id="outlined-basic"
            onChange={this.handleChange}
            name="mobile"
            label="Mobile"
            variant="outlined"
          />
          <TextField
            className=" m-2"
            id="outlined-basic"
            onChange={this.handleChange}
            name="age"
            label="age"
            variant="outlined"
          />
          <Button
            onClick={this.submit}
            variant="outlined"
            className="py-2  m-2 bg-dark text-white"
            color="primary"
          >
            Add
          </Button>
          <Link
            to ="/users"
            className="py-2 m-2 btn btn-info"
          >
            Go Back To User Table
          </Link>
        </form>
      </div>
    );
  }
}

export default AddUser;
