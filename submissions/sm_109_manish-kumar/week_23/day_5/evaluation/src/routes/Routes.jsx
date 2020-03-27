import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import {connect} from "react-redux"
import Login from "./Login";
import Register from "./Register";
// import NoMatch from "./NoMatch";
import Home from "./Home"
import AddEmploye from "./AddEmploye";

const Routes = ({isAuth}) => {
  if(isAuth === false){
    return (  
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />       
        </Switch>
      </BrowserRouter>
    )
  } else{
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/add-employee" component={AddEmploye} />
        </Switch>
      </BrowserRouter>
    )
  }
};

const mapStateToProps = (state) => ({
  isAuth:state.isAuth
})



export default connect(mapStateToProps, null) (Routes);