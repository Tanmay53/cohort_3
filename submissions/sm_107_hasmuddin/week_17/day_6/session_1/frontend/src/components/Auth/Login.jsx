import React, {useState} from 'react'
import {connect} from "react-redux"
import {fetch_response} from "../REDUX/Action"
import {Link} from "react-router-dom"
import Alert from "../Alert/Alert"

function Login(props) {
    const [email, setEmail]=useState("")
    const [password, setPass] = useState("")
    const [disappear, setDisapper] = useState(false)
    function submit(){
       const data = {
            "email":email,
            "password":password
        }
        props.fetch_response(data, "login")
        setDisapper(true)
        setTimeout(()=>{
            setDisapper(false)
        },3000)
    }
    return (
        <div className="container p-5 row justify-content-center">
            <div className="p-5 border border-dark shadow-sm bg-light col-lg-6 col-md-6 col-12">
              <div className="p-2"> {disappear?<Alert message={props.message} error={props.error} />:null}</div>
                <h3>LOGIN</h3>
                <input placeholder="Email" className="form-control my-3" type="email" onChange={(e)=>setEmail(e.target.value)}/>
                <input placeholder="Password" className="form-control my-3" type="password" onChange={(e)=>setPass(e.target.value)}/>
               <span><input className="btn btn-success my-3 mr-3" value="LOGIN" type="submit" onClick={submit}/> <Link className="border p-2" to="/signup">Click here to Register</Link></span>     
            </div>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        response:state.response,
        message:state.response.message,
        error:state.response.error
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        fetch_response:(data, url)=>dispatch(fetch_response(data, url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)