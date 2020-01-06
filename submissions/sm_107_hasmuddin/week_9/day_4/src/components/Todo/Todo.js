import React, { Component } from "react";
import { connect } from "react-redux";
import { Complete, Delete } from "../redux/Action";
import DeleteIcon from "@material-ui/icons/Delete";
import DoneIcon from "@material-ui/icons/Done";
import Fab from "@material-ui/core/Fab";

export class Todo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var { data, Complete, Delete } = this.props;
    var uncompletedData = data.filter(ele => {
      return ele.completed === false;
    });
    return (
      <ol className="list-group p-3 col-md-12  col-12">
        {uncompletedData.map(todo => {
          return (
            <tr>
              <li className="list-group-item" key={todo.id}>
                <td className="text-left">
                  <Fab color="inherit" aria-label="add">
                    <DoneIcon
                      onClick={() => {
                        Complete(todo.id);
                      }}
                    />
                  </Fab>
                </td>
                <td className="text-left text-center">
                  <span className="h4 text-center mx-3">{todo.todo}</span>
                </td>
                <td className="text-right">
                  <Fab color="secondary" aria-label="add">
                    <DeleteIcon
                      onClick={() => {
                        Delete(todo.id);
                      }}
                    />
                  </Fab>
                </td>
              </li>
            </tr>
          );
        })}
      </ol>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data
  };
};
const mapDispatchToProps = dispatch => {
  return {
    Complete: id => dispatch(Complete(id)),
    Delete: id => dispatch(Delete(id))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Todo);
