import React from 'react';
import Task1 from './components/Task1';
import ButtonX from './components/Task2';
import Card from './components/Task3'

let cardInfo={
  name:"Ms.X",
  location:"BHIVE",
  description:"Lets code",
  skills:["js","python coding","node","ui","dj","design","testing"]
}
class App extends React.Component {
  render() {
    return (
      <div>
        <Task1 />
        <div className="row">
          <div className="d-flex flex-column col-4 mx-auto">
           <ButtonX text="JOIN US" colorX="#1E91C7" />
           <ButtonX text="LOGIN" colorX="linear-gradient(180deg, rgba(253,174,43,1) 0%, rgba(240,126,29,1) 53%)" />
           <ButtonX text="SEARCH" colorX="linear-gradient(180deg, rgba(147,198,57,1) 0%, rgba(82,138,65,1) 53%)" />
           <ButtonX text="HOME" colorX="linear-gradient(180deg, rgba(255,95,163,1) 0%, rgba(182,47,103,1) 53%)" />
          </div>
          <div className="d-flex flex-column col-4">
          <ButtonX text="SETTINGS" colorX="linear-gradient(180deg, rgba(152,209,216,1) 0%, rgba(80,120,130,1) 53%)" />
          <ButtonX text="CONTACT US" colorX="linear-gradient(180deg, rgba(223,42,47,1) 0%, rgba(127,19,17,1) 61%)" />
          <ButtonX text="HELP" colorX="linear-gradient(180deg, rgba(162,165,240,1) 0%, rgba(75,66,129,1) 61%)" />
          <ButtonX text="DOWNLOAD" colorX="linear-gradient(180deg, rgba(205,184,93,1) 0%, rgba(121,85,35,1) 61%)" />
          </div>
        </div>
        <Card {...cardInfo}/>
      </div>
    )
  }
}


export default App;
