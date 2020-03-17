import React from 'react'

import { Switch, Route, Redirect } from 'react-router-dom';
import Register from '../components/auth/Register';
import Login from '../components/auth/Login';
import AdminDashboard from '../components/AdminDashboard';
import Home from "../components/Home";
import { connect } from 'react-redux';


function Routes(props) {
    return (
        <>
            <div></div>
            <Switch>
                <Route exact path='/' render={() => <Home />} />
                <Route exact path='/login'
                    render={() =>
                        (props.loginStatusError ?
                            <Login /> :
                            <Redirect to={{ pathname: '/admin' }} />
                        )
                    } />
                <Route exact path='/register' render={() => <Register />} />

                <Route exact path='/admin' render={() => <AdminDashboard />} />
                <Route render={() => <div className='display-1 mt-5 text-center text-danger'>Error 404</div>} />
            </Switch>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        loginStatusError: state.loginStatus.error
    }
}



export default connect(mapStateToProps, null)(Routes)