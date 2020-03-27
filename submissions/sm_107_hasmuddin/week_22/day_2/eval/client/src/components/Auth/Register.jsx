import React, { useState } from 'react'
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { Button } from 'antd';
import 'antd/dist/antd.css'
import { Admin_register_login } from "../REDUX/Action"


function Register({ Admin_register_login, Auth }) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPass] = useState("")
    const [loader, setLoader] = useState(false)
    const [show, setShow] = useState(false)


    const submit = () => {
        const data = {
            "name": name,
            "email": email,
            "password": password
        }
        setLoader(true)
        Admin_register_login(data, "/signup", "REGISTER")
        setTimeout(() => {
            setLoader(false)
            setShow(true)
        }, 3000)
    }
    return (
        <div className="container row justify-content-center p-5">
            <div className="p-5 bg-light border border-dark shadow-sm col-md-6 col-lg-6 col-12">
                <h3>Register</h3>
                {show && <p>{Auth.message}</p>}
                <input placeholder="Name" className="form-control my-3" type="text" onChange={(e) => setName(e.target.value)} />
                <input placeholder="Email" className="form-control my-3" type="email" onChange={(e) => setEmail(e.target.value)} />
                <input placeholder="Passsword" className="form-control my-3" type="password" onChange={(e) => setPass(e.target.value)} />
                <span> <Button className="mr-2" loading={loader} type="primary" onClick={() => {
                    submit()
                }}>Register </Button><Link className="border border-dark p-2" to="/login">Already have an Account. Login</Link></span>
            </div>
        </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Register)