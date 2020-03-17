import React, { Component } from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from './Components/Register';
import Login from './Components/Login';
import JobTable from './Components/JobTable';
import JobEntry from './Components/JobEntry';
import Navbar from './Components/Navbar';
import JobEdit from "./Components/Edit"
import { connect } from 'react-redux';
import NotFound from "./Components/NotFound";
import Not from "./Components/Not";

class App extends Component {
  render(){
    if(this.props.flag){
      return(
        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/add-job" component={JobEntry} />
              <Route exact path="/home" component={JobTable} />
              <Route exact path="/edit" component={JobEdit} />
              <Route exact component={NotFound} />
            </Switch>
          </div>
        </Router>
      )
    } else {
      return(
        <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact component={Not} />
          </Switch>
        </div>
      </Router>
      )
    }
  }
}
const mapStateToProps = (state) => ({
  flag: state.loggedIn
})



export default connect(mapStateToProps, null) (App);
