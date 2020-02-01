import React, { Component } from "react";
import { Container, Box } from "@material-ui/core";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // console.log(this.props.data)
    return (
      <Container className="mt-5 ">
        TODO TASKS ARFE AS FOLLOWS:-
        <Box>
          <ul className="list-group mt-2 mb-5 col-4">
            {this.props.data.map(itemName => (
              <li
                className="list-group-item"
                key={itemName.id}
                style={{
                  color: `${itemName.isDone ? "green" : "red"}`,
                  textDecoration: `${itemName.isDone ? "line-through" : "none"}`
                }} >
                <input
                  type="checkbox"
                  className="mr-2"
                  onClick={() => this.props.taskDone(itemName.id)}
                />
                {itemName.name}
                <button
                  className=" btn btn-sm btn-danger"
                  style={{ marginLeft: "200px" }}
                  onClick={() => this.props.delete(itemName.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </Box>
      </Container>
    );
  }
}
