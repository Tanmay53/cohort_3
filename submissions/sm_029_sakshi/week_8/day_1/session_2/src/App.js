import React from 'react';
//import logo from './logo.svg';
/* import './App.css'; */
import Os from './component/os'
import Manufecturers from './component/manufacturer'
import Button from './component/Button'
import Card from "./component/Card"


function App() {
  var os = ['Android', 'Blackberry', 'iPhone', 'Window Phone']
  var manufacturer = ['Samsung', 'HTC', 'Micromax', 'Apple']
  var cardInfo={
    name:"SAKSHI",
    location:"BHIVE",
    description:"Lets code",
    skills:["HTML","CSS","REACT","GIT","DANCE","TESTING","REdux"]
  }

  return (
    <div className="App">
      <header className="App-header">
        <Os value = {os} />
        <Manufecturers value = {manufacturer} />
        <Button/>
        <Card {...cardInfo}/>
      </header>
    </div>
  );
}

export default App;
