import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import Router from '../src/route/Router'
import NavBar from './view/component/NavBar'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loginStatus: 'Login'
    }
  }

  componentWillMount = () => {
    if (localStorage.getItem('token') !== null) {
      localStorage.removeItem('token')
    }
  }

  handleLoginStatus = (status) => {
    this.setState({
      loginStatus: status
    })
  }

  render() {
    return (
      <BrowserRouter>
      <NavBar loginStatus={this.state.loginStatus} loginStatusCallback={this.handleLoginStatus} />

        <div className='container mt-3'>
          <div className='row'>
            <div className='col-10 offset-1'>
              <Router />  
            </div>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
