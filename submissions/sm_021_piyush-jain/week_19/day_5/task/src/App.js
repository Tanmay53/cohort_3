import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from "./redux/store"
import { Link, BrowserRouter, Redirect } from "react-router-dom"
import Routes from "./routes/Routes"
import Background from "./images/dp.jpeg" 
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <React.Fragment>
          {/* <div styles= {{"backgroundImage":`url(${Background})`}}> */}
            <Routes />
          {/* </div> */}
          </React.Fragment>
        </BrowserRouter>
      </Provider>
    )
  }
}


export default App;
