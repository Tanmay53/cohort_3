import React from 'react'
import Uber from './Components/Web/Uber'
import Login from './Components/Login/Login'

class App extends React.Component{
  constructor(props){
    super(props)

  }

  render(){
    return (
              <div>
                <Login />
                <Uber />
              </div>
    )
  }
}


export default App