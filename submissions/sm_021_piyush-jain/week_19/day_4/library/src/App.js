import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom"
import Routes from "./routes/Routes"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  Logout = () => {
    localStorage.clear()
  }
  render() {
    return (
        <BrowserRouter>
          <React.Fragment>
            <Routes />
          </React.Fragment>
        </BrowserRouter>
    )
  }
}
export default App;
