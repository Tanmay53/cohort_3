import React from 'react'
import Routes from './routes/Routes'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchData } from './redux/action'

class App extends React.Component {
  componentDidMount() {
    this.props.fetchMeetingData()
  }
  render () {
    return (
      <>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
          <Link to='/' className='navbar-brand'>Home</Link>
          <div className='collapse navbar-collapse nav justify-content-end'>
            {this.props.isLogged && (
                <h5 className='text-center text-white mr-3'>{this.props.currentUser.data.token}</h5>
            )}
            {this.props.isLogged ? (<><Link to={`/order/${this.props.currentUser.data.username}`}><button className='btn btn-secondary mr-2'>Orders</button></Link>
                                    <Link to='/login'><button className='btn btn-secondary'>Logout</button></Link></>) : 
                                    <Link to='/signup'><button className='btn btn-secondary'>Signup</button></Link>
          }
          </div>
        </nav>
        <Routes />
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  isLogged: state.isLogged,
  currentUser: state.currentUser
})

const mapDisptachToProps = (dispatch) => ({
  fetchMeetingData: () => dispatch(fetchData())
})

export default connect(mapStateToProps, mapDisptachToProps)(App)
