import React from 'react'

import Navbar from './Component/Navbar'
import Routing from './Component/Routing'
import Footer from './Component/Footer'

class App extends React.Component{
  render(){
    return (
      <>
        <Navbar/>
        <Routing/>
        <Footer/>
      </>
    )
  }
}

export default App;
