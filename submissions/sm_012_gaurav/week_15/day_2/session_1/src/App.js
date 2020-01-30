import React from 'react'
import Routes from './Routes'
import { Link } from 'react-router-dom'

class App extends React.Component {
  render () {
    return (
      <>
        <nav className='navbar navbar-dark bg-dark'>
          <Link to='/'><h3 className='navbar-brand'>Dashboard</h3></Link>
        </nav>
        <Routes />
      </>
    )
  }
}

export default App
