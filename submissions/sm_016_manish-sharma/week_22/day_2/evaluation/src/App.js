import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Routes from './Routes'
import { connect } from 'react-redux';

function App({notLoggedIn}) {
  return (
      <React.Fragment>
          {notLoggedIn?
          <div className='text-danger h4 text-center'>PLEASE LOGIN FIRST</div>:
          <Navbar/>
          }
          <Routes/>
      </React.Fragment>
  );
}
const mapStateToProps = (state) => ({
  notLoggedIn:state.notLoggedIn
})

// const mapDispatchToProps = {
  
// }

export default connect(mapStateToProps,null)(App);
