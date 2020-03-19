import React, { useState, useEffect } from 'react'
import { connect } from "react-redux"
import { Link, Redirect } from "react-router-dom"
import { Button } from 'antd';
import 'antd/dist/antd.css'
import { Admin_register_login } from "../REDUX/Action"



function Login({ Auth, Admin_register_login, history }) {
    const [email, setEmail] = useState("")
    const [password, setPass] = useState("")
    const [loader, setLoader] = useState(false)
    const [show, setShow] = useState(false)
    useEffect(() => {
        console.log(Auth)
    }, [Auth])
    function submit() {
        const data = {
            "email": email,
            "password": password
        }
        setLoader(true)
        Admin_register_login(data, "/login", "LOGIN")
        setTimeout(() => {
            setLoader(false)
            setShow(true)
            console.log("work", Auth)
        }, 3000)
        setTimeout(() => {
            console.log("work", Auth)
            if (Auth.message == "login Successfull") {
                history.push("/")
            }
        }, 4000)
    }
    if (Auth.message == "login Successfull") {
        return <Redirect to="/" />
    }
    return (
        <>
            <div className="container p-5 row justify-content-center">
                <div className="p-5 border border-dark shadow-sm bg-light col-lg-6 col-md-6 col-12">
                    <h3>LOGIN</h3>
                    {show && <p>{Auth.message}</p>}
                    <input placeholder="Email" className="form-control my-3" type="email" onChange={(e) => setEmail(e.target.value)} />
                    <input placeholder="Password" className="form-control my-3" type="password" onChange={(e) => setPass(e.target.value)} />
                    <span><Button className="mr-2" loading={loader} type="primary" onClick={() => {
                        submit()
                    }}>Login </Button>
                        <Link className="border p-2" to="/register">Click here to Register</Link></span>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        state: state,
        Auth: state.Auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        Admin_register_login: (data, url, types) => dispatch(Admin_register_login(data, url, types))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)