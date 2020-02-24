import React from 'react';
import Header from './components/Header'
import Routes from './components/Routes'
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes />
      <Footer />
    </React.Fragment>
  );
}

export default App;
