/** @format */

import React from "react";
import { connect } from "react-redux";
import { removeTodo } from "../actions/removeTodo";

const RemoveTodo = props => {
  return (
    <>
      {console.log(props)}
      <button
        className="btn btn-danger my-1 mx-3 float-right"
        onClick={() =>
          props.removeTodo({
            itemName: props.item
          })
        }
      >
        Remove Todo
      </button>
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    removeTodo: payload => dispatch(removeTodo(payload))
  };
};

export default connect(null, mapDispatchToProps)(RemoveTodo);
