import React from 'react';
import Dashboard from './Components/common/Dashboard';
import Login from './Components/auth/Login';
import {Redirect, Route} from 'react-router-dom';
import {connect} from 'react-redux';

class App extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        console.log("IS LOGGED", this.props.isLogged);
        return (
            <>
                {this.props.isLogged?<Redirect to = "/" />: <Redirect to = "/login" />}
                <Route exact path = "/" render = {() => <Dashboard />} />
                <Route path = "/login" render = {() => <Login />} />
            </>
        );
    }
}

const mapStateToProps = (state) => ({isLogged: state.isLogged});

export default connect(mapStateToProps, null)(App);
