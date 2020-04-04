import React from "react"
import Header from "./components/Header"
import Routes from "./Routes/Routes"

class App extends React.Component{
  render(props){
    return (
      <>
        <Header/>
        <Routes/>
      </>
    )
  }
}

export default App