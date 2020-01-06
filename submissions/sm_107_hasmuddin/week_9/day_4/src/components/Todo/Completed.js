import React, { Component } from "react";
import { connect } from "react-redux";
import { Complete, Delete } from "../redux/Action";
import DeleteIcon from "@material-ui/icons/Delete";
import Fab from "@material-ui/core/Fab";

export class Completed extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var { data, Delete } = this.props;
    var completedData = data.filter(ele => {
      return ele.completed === true;
    });
    return (
      <ol className="list-group p-3">
        {completedData.map(todo => {
          return (
            <tr>
              <li className="list-group-item" key={todo.id}>
                <td className="text-center">
                  <span className="h4 mr-1">
                    <strike>{todo.todo}</strike>
                  </span>
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
export default connect(mapStateToProps, mapDispatchToProps)(Completed);
