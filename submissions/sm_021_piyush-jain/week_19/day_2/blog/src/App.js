import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, BrowserRouter, Redirect } from "react-router-dom"
import Routes from "./routes/Routes"
import { Provider } from 'react-redux'
import store from "./redux/store"

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
      <Provider store={store}>
        <BrowserRouter>
          <React.Fragment>
            <Routes />
          </React.Fragment>
        </BrowserRouter>
      </Provider>
    )
  }
}
export default App;
