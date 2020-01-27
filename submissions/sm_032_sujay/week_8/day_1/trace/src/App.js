import React from 'react';
import logo from './logo.svg';
import './App.css';
import Mobile from "./components/mobiles/Mobile"
import Home from "./components/functional/Home"
import Login from "./components/functional/Login"
import JoinUs from "./components/functional/JoinUs"
import Setting from "./components/functional/Setting"
import Search from "./components/functional/Search"
import Download from "./components/functional/Download"
import Help from "./components/functional/Help"
import Contact from "./components/functional/Contact"
import StaticCard from "./components/functional/StaticCard"



const App =() => {
  return (
    <div>
      <Mobile/>
      
      <div className="Row"> <JoinUs/> <Setting/></div>
      <div className="Row"><Login/> <Contact/> </div>
      <div className="Row"> <Search/><Help/></div>
      <div className="Row"> <Home/><Download/></div>

      <StaticCard/>
  
    </div>
  );
}

export default App;
