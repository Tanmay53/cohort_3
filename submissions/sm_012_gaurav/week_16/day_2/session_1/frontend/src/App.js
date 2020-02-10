import React from 'react'
import Routes from './Routes'
import { Link } from 'react-router-dom'

class App extends React.Component {
  render () {
    return (
      <>
        <nav className='navbar navbar-dark bg-dark'>
          <Link to='/' className='navbar-brand'>Home</Link>
          <Link to='/users/create' className='btn btn-dark'>Add New User</Link>
        </nav>
        <Routes />
      </>
    )
  }
}

export default App
