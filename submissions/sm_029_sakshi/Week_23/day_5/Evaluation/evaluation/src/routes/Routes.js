import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './../components/auth/Login';
import Register from './../components/auth/Register';
import Home from './../components/common/Home';
import AddData from '../components/common/AddData';
import { connect } from 'react-redux'
import AddDepartment from '../components/common/AddDepartment';

class Routes extends Component {
    render() {
        let Loginpossible = !this.props.loginData.error
        return (
            <>
                <Switch>
                    <Route exact path='/' render={() => Loginpossible ? <Home /> : <Redirect to='/login' />} />
                    <Route exact path='/home' render={() => Loginpossible ? <Home /> : <Redirect to='/login' />} />
                    <Route exact path='/login' render={() => <Login />} />
                    <Route exact path='/register' render={() => <Register />} />
                    <Route exact path='/addempData' render={() => Loginpossible ? <AddData /> : <Redirect to='/login' />} />
                    <Route exact path='/department' render={() => Loginpossible ? <AddDepartment />  : <Redirect to='/login' />} />
                    
                </Switch>
            </>
        )
    }
}

const mapStateToProps = state => ({
    loginData: state.loginData
})


export default connect(mapStateToProps)(Routes)