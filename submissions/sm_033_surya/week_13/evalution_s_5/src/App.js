import React from 'react';
import { Link } from "react-router-dom"
import Router from "./Router/Router"
// import Display from "./Common/Display"

class App extends React.Component {
  constructor(){
    super()
    this.state={
      // isAuth:false
    }
  }
  render(){
    // console.log(store.ge)
  return (
    <>
    <div className="container ">
      <div className ="row m-5">
        <div className="col-4 text-center border border-primary py-2">
      <Link to ="/">Home</Link></div>
      <div className="col-4 text-center border border-primary py-2">
      <Link to ="/adduser">Adduser</Link>
      </div>
      <div className="col-4 text-center border border-primary py-2">
      <Link to ="/allusers">Allusers</Link>
      </div>
    </div>
    <Router/>
    {/* <Display /> */}
    </div>
    </>
  );
  }
}

export default App
