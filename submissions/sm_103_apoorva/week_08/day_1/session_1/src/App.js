import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import ReactDOM from 'react-dom';
function App() {
  return (
    <div>
     <h1>Mobile Operating System</h1>
     <ul>
       <li>Android</li>
       <li>Blackberry</li>
       <li>iphone</li>
       <li>Windows phone</li>
     </ul>

     <h1>Mobile Manufacturers</h1>
     <ul>
       <li className="square">Samsung</li>
       <li className="square">HTC</li>
       <li>Micromax</li>
       <li className="circle">Apple</li>
     </ul>

     <div className="row">
       <div className="col-6 row">
          <div className="col-3" >
            <button type="button" className="badge badge-pill badge-info mx-5">JOIN US</button>
          </div>
          <div className="col-3" >
            <button type="button" className="badge badge-pill badge-secondary">SETTINGS</button>
          </div>
       </div>
     </div>
     <div className="row my-3">
       <div className="col-6 row">
          <div className="col-3" >
            <button type="button" className="badge badge-pill badge-warning mx-5">SEARCH</button>
          </div>
          <div className="col-3" >
            <button type="button" className="badge badge-pill badge-danger">HELP</button>
          </div>
       </div>
     </div>
     <div className="row my-3">
       <div className="col-6 row">
          <div className="col-3" >
            <button type="button" className="badge badge-pill badge-success mx-5">HOME</button>
          </div>
          <div className="col-3" >
            <button type="button" className="badge badge-pill badge-dark">DOWNLOAD</button>
          </div>
       </div>
     </div>
     <div className="row my-3">
       <div className="col-6 row">
          <div className="col-3" >
            <button type="button" className="badge badge-pill badge-primary mx-5">LOGIN</button>
          </div>
          <div className="col-3" >
            <button type="button" className="badge badge-pill badge-secondary">CONTACT US</button>
          </div>
       </div>
     </div>
     <br />
     <div  className="bgBox">
       <div className="card" >
         <div>
            <span class="badge badge-warning d-inline mx-3 px-2  ">PRO</span>
         </div>
         <div className="margin" id="imgDiv">
           <img  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80" />
         </div>
         <div className="text">
           <h5 className="mx-3">Ricky Park</h5>
           <p className="mx-4">New York</p>
         </div>
         <div className="text1">
            <p>User Interface Designer and</p>
            <p className="mx-4">front-end developer</p>
         </div>
         <div className="text1">
            <button type="button" className="btn btn-primary">Primary</button>
            <button type="button" className="btn btn-outline-primary mx-4">Primary</button>
         </div>
         <br />
         <div className="footer">
            <p className="mx-2 my-3">Skills</p>
            <span className="badge spanFoot">UI/UX</span>
            <span className="badge spanFoot mx-4">Front-end development</span>
            <span className="badge spanFoot mx-3">HTML</span>
         </div>
         <div className="footer">
            <span className="badge spanFoot">CSS</span>
            <span className="badge spanFoot mx-4">Javascript</span>
            <span className="badge spanFoot mx-3">React</span>
            <span className="badge spanFoot mx-3">Node</span>
         </div>
       </div>
    </div>
    </div>
  );
}

export default App;
