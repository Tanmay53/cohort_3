/** @format */

import React from "react";
import { connect } from "react-redux";
import { toggleItem } from "../actions/toggleTodo";

const ToggleItem = props => {
  return (
    <>
      {console.log(props)}
      <button
        className="btn btn-success my-1 mx-3 float-right"
        onClick={() =>
          props.toggleItem({
            itemName: props.item,
            completed: false
          })
        }
      >
         {props.status ? <>Mark Incompleted</> : <>Mark Completed</>}
      </button>
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    toggleItem: payload => dispatch(toggleItem(payload))
  };
};

export default connect(null, mapDispatchToProps)(ToggleItem);
