import React, { Component } from 'react'
import { Link, Connector, Redirect } from "react-router-dom"
class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        console.log(props)
    }
    Logout=()=>{
        localStorage.clear()
        this.props.histoy.push("/home")
      }
    render() {
        return (
            <React.Fragment>
                <nav class="navbar navbar-dark bg-primary">
                    <div><button class="btn btn-primary lead"><Link to="/user" style={{ "color": "white", "textDecoration": "none" }}>PIYUSH</Link></button></div>
                    <h3 style={{ "color": "white" }}><Link to="/home" style={{ "color": "white", "textDecoration": "none" }}><span class=" 	d-none d-sm-block">ULTRA HIGH</span></Link></h3>
                    <div><button class="btn btn-primary lead"><Link to="/create" style={{ "color": "white", "textDecoration": "none" }}>CREATE</Link></button>
                        <button class="btn btn-warning ml-2"><Link to="/blog" style={{ "color": "white" }}>Blog</Link></button>
                        <button class="btn btn-danger ml-2" onClick={this.Logout}>Logout</button>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}
export default Navbar
