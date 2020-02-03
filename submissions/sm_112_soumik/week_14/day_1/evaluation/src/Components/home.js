import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

function Home(props) {
  if (props.isAuth) {
    return (
      <div className="animated fadeInUp mt-4 text-center">
        <h1 className="display-3 bg-warning">DashBoard</h1>
        <h1>Logged In</h1>
        <h2 className="animated fadeInUp delay-1s mt-4 text-center">
          You can add update and delete Vehicles.
        </h2>
        <h2></h2>
      </div>
    );
  } else {
    return <Redirect to="/login" />;
  }
  // return (

  // );
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth
});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
