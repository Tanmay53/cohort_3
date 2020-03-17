import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Switch, Route } from 'react-router-dom'
import Home from '../components/Home'
import Editartist from '../components/Editartist'
import Adddetails from '../components/Adddetails'
import Login from '../common/Login'
import Register from '../common/Register'
import { logout } from '../redux/Actions'


class Nomatch extends Component {
    render() {
        return (
            <div>
                <h1>404 page Not Found</h1>
            </div>
        )
    }
}


export class Router extends Component {

    handleClick = () => {
        this.props.logout()
    }
    render() {
        console.log(this.props.value)
        return (
            <>
                <div className="containerfluid bg-light border border-primary mb-5">
                    <div className="container">
                        <div className='row p-4 text-center'>
                            <div className="col-3">
                                <Link to="/"><button className="btn btn-outline-primary">Home</button></Link>
                            </div>
                            {this.props.value.login && <div className="col-3">
                                <Link to="/adddata"><button className="btn btn-outline-primary">Add album</button></Link>
                            </div>}
                            {!this.props.value.login && <div className="col-3">
                                <Link to="/login"><button className="btn btn-outline-warning">Login</button></Link>
                            </div>}
                            {!this.props.value.login && <div className="col-2">
                                <Link to="/register"><button className="btn btn-outline-success">Register</button></Link>
                            </div>}
                            {this.props.value.login && <div className="col-2 text-right">
                                <h3 className="text-danger">{this.props.value.user}</h3>
                            </div>}
                            {this.props.value.login && <div className="col-3">
                                <button className="btn btn-danger" onClick={this.handleClick}>Logout</button>
                            </div>}
                        </div>
                    </div>
                </div>
                <Switch>
                    <Route path="/" exact render={(props) => <Home {...props} />} />
                    <Route path="/adddata" exact render={(props) => <Adddetails {...props} />} />
                    <Route path='/login' exact render={(props) => <Login {...props} />} />
                    <Route path='/register' exact render={(props) => <Register {...props} />} />
                    <Route path="/edit/:id" exact render={(props) => <Editartist {...props} />} />
                    <Route component={Nomatch} />
                </Switch>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    value: state.loginreducer

})

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Router)
