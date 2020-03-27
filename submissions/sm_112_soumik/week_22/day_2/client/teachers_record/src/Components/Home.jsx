import React from "react";
import My_Table from "./My_Table";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

function Home(props) {
  if (props.status == false) {
    return <Redirect to="/login" />;
  }
  return (
    <div className="conteiner text-center">
      <h2>Teachers Records Table</h2>
      <My_Table />
    </div>
  );
}

const mapStateToProps = state => ({
  status: state.auth.status
});
export default connect(mapStateToProps, null)(Home);
