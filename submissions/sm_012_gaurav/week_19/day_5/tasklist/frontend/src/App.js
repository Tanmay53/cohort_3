import React from 'react'
import { Link } from 'react-router-dom'
import Routes from './Routes'
import { loginUser, logoutUser } from './redux/actions'
import { connect } from 'react-redux'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  static getDerivedStateFromProps (prevProps) {
    if (localStorage.getItem('token')) {
      prevProps.loginUser()
    }
    return null
  }

  handleLogout = () => {
    localStorage.clear()
    this.props.logoutUser()
  }

  render () {
    return (
      <>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
          <Link to='/' className='text-white navbar-brand'>Home</Link>
          <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse justify-content-end' id='navbarNavAltMarkup'>
            <div className='navbar-nav'>
              {this.props.isLogged ? <Link to='/addtasklist'><button className='btn btn-dark mr-2'>Add Task List</button></Link>
                : <Link to='/'><button className='btn btn-dark mr-2'>Login</button></Link>}
              {this.props.isLogged ? <div className='justify-content-start'><button className='btn btn-dark' onClick={this.handleLogout}>Logout</button></div>
                : <Link to='/signup'><button className='btn btn-dark'>Signup</button></Link>}
            </div>
          </div>
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
  loginUser: () => dispatch(loginUser()),
  logoutUser: () => dispatch(logoutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
