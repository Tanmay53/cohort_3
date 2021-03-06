import React, { useState } from 'react'
import { LoginValidation } from "../common/Validation/LoginValidation"
import { LoginUser } from "../../Redux/Auth/AuthAction"
import { connect } from "react-redux"
import { Link, Redirect } from "react-router-dom"



function Login({ LoginUser, Auth }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState({})
    const [token] = useState(localStorage.getItem("token"))
    const submit = (event) => {
        console.log(token)
        setError({})
        event.preventDefault()
        const userData = { "email": email, "password": password }
        const err = LoginValidation({ state: userData })
        if (Object.keys(err).length !== 0) {
            setError(err)
        }
        else {
            LoginUser(userData)
        }

    }
    if (token || Auth.isLoggedIn) {
        return <Redirect to="/" />
    }

    return (
        <div className="container p-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-6 col-12  border p-5 bg-light ">
                    {Auth.message && <p>{Auth.message}</p>}
                    <form onSubmit={submit} >
                        <h2 className="text-center">Login </h2>
                        <label htmlFor="email">Email</label>
                        <input
                            className="form-control"
                            type="text"
                            onChange={(e) => setEmail(e.target.value)} />
                        {error.email && <p className="text-danger">{error.email}</p>}

                        <label htmlFor="password">Password</label>
                        <input
                            className="form-control"
                            type="password"
                            onChange={(e) => { setPassword(e.target.value) }} />

                        {error.password && <p className="text-danger">{error.password}</p>}

                        <input
                            disabled={Auth.loading}
                            type="submit" className="btn btn-success my-2" value="Login" /> <br />

                        <Link to="/signup">Not Registered yet?</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        Auth: state.Auth
    }
}
const mapDispatchToProps = dispatch => {
    return {
        LoginUser: user => dispatch(LoginUser(user))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)
