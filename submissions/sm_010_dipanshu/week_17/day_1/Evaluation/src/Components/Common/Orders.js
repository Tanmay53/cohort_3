import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Orders extends React.Component {
  render() {
    if (this.props.isLoggedIn) {
      return <div>Orders Page</div>;
    } else {
      return <Redirect to="/login" />;
    }
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn
  };
};

export default connect(mapStateToProps)(Orders);
