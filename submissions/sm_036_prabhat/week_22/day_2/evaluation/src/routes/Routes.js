import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './../components/auth/Login';
import Register from './../components/auth/Register';
import Home from './../components/common/Home';
import AddAlbum from '../components/common/AddAlbum';
import AddArtist from './../components/common/AddArtist';
import Edit from '../components/common/Edit';
import PageNotFound from './../components/common/PageNotFound';
import { connect } from 'react-redux'

class Routes extends Component {
    render() {
        let loginStatus = !this.props.loginData.error
        return (
            <>
                <Switch>
                    <Route exact path='/' render={() => loginStatus ? <Home /> : <Redirect to='/login' />} />
                    <Route exact path='/home' render={() => loginStatus ? <Home /> : <Redirect to='/login' />} />
                    <Route exact path='/login' render={() => <Login />} />
                    <Route exact path='/home' render = { ()=> <Login />} />
                    <Route exact path='/register' render={() => <Register />} />
                    <Route exact path='/album' render={() => loginStatus ? <AddAlbum /> : <Redirect to='/login' />} />
                    <Route exact path='/artist' render={() => loginStatus ? <AddArtist />  : <Redirect to='/login' />} />
                    <Route exact path='/home/edit/:id' render={(props) => loginStatus ? <Edit {...props} /> : <Redirect to='/login' /> } />
                    <Route exact render={() => <PageNotFound />} />
                </Switch>
            </>
        )
    }
}

const mapStateToProps = state => ({
    loginData: state.loginData
})


export default connect(mapStateToProps)(Routes)