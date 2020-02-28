import React from 'react';
import './App.css';
import { Link, BrowserRouter } from "react-router-dom"
import Routes from "./routes/Routes"
import axios from "axios"
import {Connect} from "react-router-dom"
class App extends React.Component {
  constructor(props){
    super(props)
    this.state={

    }
  }
  componentDidMount=()=>{
    axios.get("http://127.0.0.1:5000/home")
    .then(res=>console.log(res))
  }
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <nav class="navbar navbar-dark bg-primary">
            <div><button class="btn btn-primary"><Link to="/user" style={{ "color": "white", "textDecoration": "none" }}>Piyush</Link></button></div>
            <h3 style={{ "color": "white" }}><Link to="/home" style={{ "color": "white", "textDecoration": "none" }}>ULTRA HIGH</Link></h3>
            <div><button class="btn btn-primary"><Link to="/create" style={{ "color": "white", "textDecoration": "none" }}>CREATE</Link></button>
              <button class="btn btn-danger ml-2"><Link to="/blog" style={{ "color": "white" }}>Blog</Link></button>
              {/* <button class="btn btn-danger ml-2"><Link to="/comment" style={{ "color": "white" }}>comment</Link></button> */}
              </div>
          </nav>
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
