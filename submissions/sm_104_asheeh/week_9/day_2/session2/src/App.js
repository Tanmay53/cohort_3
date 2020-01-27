import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import MyRoute from './Components/Route';

class App extends React.Component{
  render(){
  return (
    <div className="App">
      <Navbar />
      <MyRoute/>
    </div>
  );
}
}

export default App;
