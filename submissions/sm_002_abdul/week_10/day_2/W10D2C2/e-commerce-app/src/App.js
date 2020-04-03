import React from 'react';
import Routes from './components/Routes'
import Header from "./components/Header"
import Footer from "./components/Footer"


class App extends React.Component{
  render(){
    return (
      <>
        <Header/>

        <Routes/>

        <Footer/>
      </>
    )
  }
}

export default App;
