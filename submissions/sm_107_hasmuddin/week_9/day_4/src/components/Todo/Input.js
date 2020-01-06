import React, { Component } from "react";
import { connect } from "react-redux";
import { AddTodo } from "../redux/Action";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

let countId = 1;
export class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
      completed: false
    };
  }
  render() {
    var { AddTodo } = this.props;
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          AddTodo({ ...this.state, id: countId++ });
        }}
      >
        <tr>
          <td>
            <TextField
              onChange={e =>
                this.setState({
                  todo: e.target.value
                })
              }
              id="outlined-basic"
              label="Add Todo"
              variant="outlined"
              className="mx-3 mb-5 h3"
            />
          </td>
          <td>
            <Fab className="mt-4" color="primary" aria-label="add">
              <AddIcon
                onClick={() => AddTodo({ ...this.state, id: countId++ })}
              />
            </Fab>
          </td>
        </tr>
      </form>
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
    AddTodo: data => dispatch(AddTodo(data))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Input);
