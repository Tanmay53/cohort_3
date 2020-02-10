import React from 'react';
import './App.css';
import { BrowserRouter, Link } from 'react-router-dom'
import Routes from './routes/Routes';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <nav className="navbar navbar-expand-lg navbar-light bg-warning sticky-top">
          <img className='navbar-brand' src='https://www.masaischool.com/static/img/logo.svg' alt='brand'/>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link to='/'><p className='text-dark my-2 mx-5'>Home</p></Link>
              </li>
              <li className="nav-item">
              <Link to='/orders'><p className='text-dark my-2 mx-5'>Orders</p></Link>
              </li>
              <li className="nav-item">
              <Link to='/login'><p className='text-dark my-2 mx-4'>Login</p></Link>
              </li>
              <li className="nav-item">
              <Link to='/register'><p className='text-dark my-2 mx-4'>Register</p></Link>
              </li>
            </ul>
          </div>
          </nav>
          <div className='my-5'></div>
          <Routes />
        </React.Fragment>
      </BrowserRouter>
    )
  }

}

export default App
