import React from 'react';
// import './App.css';
import NavBar from './Navbar';
import Jumbo from './Jumbo';
import BreakInbox from './BreakInbox';
class Slack extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <NavBar />
        <Jumbo />
        <BreakInbox />
      </div>
    )
  }
}

export default Slack;
