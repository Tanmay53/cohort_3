import React from 'react';
import './App.css';

function Button(props){
  return <button className ={["btn", props.color].join(" ")}>{props.label}</button>;
}

function Block (props){
  return <div className = "col-4"> 
            <div className = "row">
              <Button color ="btn-primary" label ="JOIN US"/>
            </div>
            <div className = "row">
            <Button color ="btn-secondary" label ="LOGIN"/>
            </div>
            <div className = "row">
            <Button color ="btn-info" label ="SEARCH"/>
            </div>
            <div className = "row">
            <Button color ="btn-warning" label ="HOME"/>
            </div>
         </div>
}

function Block1 (props){
  return <div className = "col-4"> 
            <div className = "row">
              <Button color ="btn-primary" label ="JOIN US"/>
            </div>
            <div className = "row">
            <Button color ="btn-secondary" label ="LOGIN"/>
            </div>
            <div className = "row">
            <Button color ="btn-info" label ="SEARCH"/>
            </div>
            <div className = "row">
            <Button color ="btn-warning" label ="HOME"/>
            </div>
         </div>
}
// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }
function App() {
  return (
    <div className = "row">
      <Block/>    
      <Block1/>
    </div>
  );
}

export default App;
