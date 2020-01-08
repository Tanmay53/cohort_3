import React from "react";
import { Route, Redirect } from "react-router-dom";
import Notloggedin from './Notloggedin' ;
import Userpage from './Userpage';

class Login extends React.Component {
  render() {
    return (
      <div style={{ padding: 50 }}>
        <br />
        {!this.props.isAuthenticated ? (
          <Redirect to={{ pathname: "/auth/login"}} />
        ) : (
          <Redirect to={{ pathname:"/cart"}} />
        )}
        <Route
          path="/auth/login"
          render={props => (
            <Notloggedin
              func={this.props.fakeAuth}
              isSigningUp={this.props.isSigningUp}
              addUser={this.props.addUser}
              alreadyMember={this.props.alreadyMember}
            />
          )}
        />
        <Route
          path="/auth/dashboard"
          render={props => (
            <Userpage
              func={this.props.fakeAuth}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}
export default Login;
