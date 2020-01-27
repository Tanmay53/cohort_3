import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

function Home({ logged }) {
  if (logged) {
    return (
      <div className="text-center">
        <h2>Logged IN</h2>

        <Link to="/showpost">
          <button className="btn btn-info p-4">Show Feed</button>
        </Link>
        <Link to="/adduser">
          <button className="btn btn-danger p-4">Add Feed</button>
        </Link>
      </div>
    );
  } else {
    return <Redirect to="/login" />;
  }
}

const mapStateToProps = state => ({
  logged: state.auth.isLoggedIn
});
export default connect(mapStateToProps)(Home);
