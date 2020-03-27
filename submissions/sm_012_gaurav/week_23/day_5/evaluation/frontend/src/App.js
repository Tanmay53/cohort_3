import React from 'react'
import Routes from './Routes'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser } from './redux/actions'

class App extends React.Component {
  render () {
    return (
      <>
        <nav className='navbar navbar-dark bg-dark'>
          <Link to='/'><h3 className='navbar-brand'>Home</h3></Link>
          <form className='form-inline'>
            {this.props.isLogged && <Link to='/addCompany'><button className='btn btn-dark my-2 my-sm-0 mr-2'>Add Company</button></Link>}
            {this.props.isLogged && <Link to='/addJob'><button className='btn btn-dark my-2 my-sm-0 mr-2'>Add Job</button></Link>}
            {this.props.isLogged ? <button className='btn btn-dark my-2 my-sm-0' onClick={() => this.props.logoutUser()}>Sign Out</button>
              : <Link to='/signup'><button className='btn btn-dark my-2 my-sm-0'>Signup</button></Link>}
          </form>
        </nav>
        <Routes />
      </>
    )
  }
}

const mapStateToProps = state => ({
  isLogged: state.isLogged
})

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
