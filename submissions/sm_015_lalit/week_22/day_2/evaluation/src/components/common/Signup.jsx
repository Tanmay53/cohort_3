import React from "react";
import styles from "./Login.module.css";
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom'
import axios from 'axios';


class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name:"",
        email:"",
        password:"",
        username:"",
        mobile:"",
        description:""
     };
  }
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
      <>
        <div
          className={`col-12 d-flex justify-content-center  ${styles.parentSignup}`}
        >
          <div className={`col-5 mt-1 ${styles.centerBox}`}>
            <p className="text-center">
              <svg
                height="41px"
                viewBox="0 0 24 24"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
              </svg>
            </p>
            <p className="text-center mt-4 mb-2 text-white h3">Create your account</p>
            <TextField onChange={this.handleChange} name="name" required className={`col my-2  ${styles.textField}`} id="filled-basic" label="Name" variant="filled" />
            <TextField onChange={this.handleChange} name="email" required className={`col my-2  ${styles.textField}`} id="filled-basic" label="Email" variant="filled" />
            <TextField onChange={this.handleChange} name="password" required className={`col my-2  ${styles.textField}`} id="filled-basic" label="Password" variant="filled"type="password" />
            <TextField onChange={this.handleChange} name="username" required className={`col my-2  ${styles.textField}`} id="filled-basic" label="Username" variant="filled" />
            <TextField onChange={this.handleChange} name="mobile" required className={`col my-2  ${styles.textField}`} id="filled-basic" label="Mobile" variant="filled" />
            <TextField onChange={this.handleChange} name="description" required className={`col my-2  ${styles.textField}`} id="filled-basic" label="Description" variant="filled" />
            <button type="button" onClick={this.handleSubmit} className={`btn btn-primary font-weight-bold rounded-pill col my-3 py-3 mb-4  ${styles.rounded}`}>Submit</button>
          </div>
        </div>
      </>
    );
  }
}
export default Signup;
