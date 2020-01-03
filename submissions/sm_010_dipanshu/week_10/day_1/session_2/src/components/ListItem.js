import React from "react";
import store from "../redux/store";
import { updateTask, removeTask } from "../redux/actions";

class ListItem extends React.Component {
  handleCheck = event => {
    let taskNumber = Number(event.target.id);
    store.dispatch(updateTask(taskNumber));
  };

  handleDelete = event => {
    let taskNumber = Number(event.target.id);
    store.dispatch(removeTask(taskNumber));
  };

  render() {
    if (this.props.completed) {
      return (
        <div className="container col-12 mx-auto bg-success text-light p-1 rounded mb-3">
          <div className="d-flex justify-content-between">
            <div className="form-check form-check-inline ml-3">
              <input
                className="form-check-input"
                type="checkbox"
                onChange={this.handleCheck}
                id={this.props.index}
              />
            </div>
            <div className="align-self-center">
              <del>{this.props.task}</del>
            </div>
            <button
              className="btn btn-sm btn-danger mr-3"
              id={this.props.index}
              onClick={this.handleDelete}
            >
              x
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container col-12 mx-auto bg-dark text-light p-1 rounded mb-3">
          <div className="d-flex justify-content-between">
            <div className="form-check form-check-inline ml-3">
              <input
                className="form-check-input"
                type="checkbox"
                onChange={this.handleCheck}
                id={this.props.index}
              />
            </div>
            <div className="align-self-center">{this.props.task}</div>
            <button
              className="btn btn-sm btn-danger mr-3"
              id={this.props.index}
              onClick={this.handleDelete}
            >
              x
            </button>
          </div>
        </div>
      );
    }
  }
}
export default ListItem;
