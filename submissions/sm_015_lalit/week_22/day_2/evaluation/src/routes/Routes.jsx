import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from '../components/common/Home'
import Login from "../components/common/Login";
import Signup from "../components/common/Signup";
import UserHome from "../components/protected/UserHome";
import Profile from "../components/protected/Profile";



const Routes = () => {
  return (
    <>
      {/* <Route path="/" component={NavBarPublic} /> */}
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/login" exact render={() => <Login/>} />
        <Route path="/signup" exact render={() => <Signup />} />
        <Route path="/userhome" exact render={() => <UserHome/>} />
        <Route path="/profile" exact render={()=> <Profile/>}/>
      </Switch>
    </>
  );
};

export default Routes;