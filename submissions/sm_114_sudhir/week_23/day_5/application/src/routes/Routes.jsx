import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Navbar from '../components/common/Navbar'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
import Home from '../components/common/Home'
import PageNotFound from '../components/common/PageNotFound'
import AddProducts from '../components/common/AddProducts'
import { connect } from 'react-redux'


function Routes(props) {
    return (
        <React.Fragment>
            <Route path="/" component={Navbar} />
            <Switch>
                
                { props.isAuth ? (<Route path="/" exact render={(props) => <Home {...props} /> } />) :
                    (<Route path="/" exact render={() => <Login /> } />)
                }

                <Route path="/login" render={() => <Login /> } />
                <Route path="/register" render={() => <Register /> } />
                <Route path="/addproduct" render={() => <AddProducts /> } />
                <Route component={PageNotFound} />
            </Switch>
        </React.Fragment>
    )
}


const mapStateToProps = (state) => ({
    isAuth: state.authReducer.isAuth
})

export default connect(mapStateToProps, null)(Routes);
