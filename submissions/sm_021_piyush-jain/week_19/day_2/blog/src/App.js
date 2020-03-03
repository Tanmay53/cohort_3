import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, BrowserRouter,Redirect } from "react-router-dom"
import Routes from "./routes/Routes"
import axios from "axios"
import Navbar from "./components/Navbar"
import {Connect} from "react-router-dom"
class App extends React.Component {
  constructor(props){
    super(props)
    this.state={

    }
  }
  componentDidMount=async()=>{
    console.log("hello")
   await axios.get("http://127.0.0.1:5000/getId")
    .then(res=>console.log(res))
  }
  Logout=()=>{
    localStorage.clear()
    // this.props.histoy.push("/home")
  }
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          {/* <nav class="navbar navbar-dark bg-primary">
            <div><button class="btn btn-primary lead"><Link to="/user" style={{ "color": "white", "textDecoration": "none" }}>PIYUSH</Link></button></div>
            <h3 style={{ "color": "white" }}><Link to="/home" style={{ "color": "white", "textDecoration": "none" }}><span class=" 	d-none d-sm-block">ULTRA HIGH</span></Link></h3>
            <div><button class="btn btn-primary lead"><Link to="/create" style={{ "color": "white", "textDecoration": "none" }}>CREATE</Link></button>
              <button class="btn btn-warning ml-2"><Link to="/blog" style={{ "color": "white" }}>Blog</Link></button>
              <button class="btn btn-danger ml-2" onClick={this.Logout}>Logout</button>
              </div>
          </nav> */}
          <Routes />
        </React.Fragment>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}


export default App;
