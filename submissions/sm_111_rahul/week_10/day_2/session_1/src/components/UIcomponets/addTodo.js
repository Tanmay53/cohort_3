/** @format */

import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/addTodo";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }
  render() {
    return (
      <>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.setState({ input: e.target.value });
          }}
        >
          <input
            type="text"
            onChange={e => this.setState({ input: e.target.value })}
            placeholder="add something here"
            className="form-control"
          />
          <br></br>
          <button
            className="btn btn-warning m-2"
            onClick={() =>
              this.props.addTodo({
                itemName: this.state.input,
                completed: false
              })
            }
          >
            ADD TO DO
          </button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: payload => dispatch(addTodo(payload))
  };
};

export default connect(null, mapDispatchToProps)(AddTodo);
