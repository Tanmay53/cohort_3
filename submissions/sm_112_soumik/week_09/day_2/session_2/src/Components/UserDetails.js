import React, { Component } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { AppBar } from "@material-ui/core";
// import TextField from "material-ui/TextField";
// import RaisedButton from "@material-ui/RaisedButton";

export class UserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter User Details" />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default UserDetails;
