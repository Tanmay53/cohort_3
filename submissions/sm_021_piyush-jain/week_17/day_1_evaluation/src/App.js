import React from 'react';
import { Link,BrowserRouter, Redirect } from "react-router-dom"
import store from "./redux/store"
import Routes from "./routes/Routes"
import { Provider } from "react-redux"
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <React.Fragment>
            <div>
              <nav class="navbar navbar-dark bg-dark">
                <button class="btn btn-outline-light"><Link to="/" style={{ "textDecoration": "none" }}>Home</Link></button>
                <h3 class="text-white">91 SpringBoard</h3>
                <button class="btn btn-outline-light"><Link to="/booking" style={{ "textDecoration": "none" }}>Booking</Link></button>
              </nav>
              <Redirect to="/"></Redirect>
              <Routes />
            </div>
          </React.Fragment>
        </BrowserRouter>
      </Provider>
    )
  }
}


export default App;
