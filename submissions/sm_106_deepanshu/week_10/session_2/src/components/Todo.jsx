import React, { Component } from "react";
import { Input, Button } from "antd";
import store from "../redux/store";
import { addTodo } from "../redux/action";

export class todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoItem: ""
    };
  }
  handleChange = e => {
    this.setState({ todoItem: e.target.value });
  };

  render() {
    console.log(store.getState().todoArr);
    return (
      <div className="container my-5 px-3">
        <div className="row">
          <div className="col-md-12 text-center p-5 border">
            <h5 className="lead text-dark">Todo</h5>
            <Input
              onChange={this.handleChange}
              value={this.state.todoItem}
              placeholder="Todo"
            />
            <Button
              type="primary"
              onClick={() => store.dispatch(addTodo(this.state.todoItem))}
              className="my-2"
              block
            >
              Add
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 border my-2">
            <p className="text-dark text-center">Todo Task</p>
            <ul style={{ listStyle: "none" }}>
              {store.getState().todoArr.map((elem, i) => {
                return (
                  <li className="d-flex justify-content-between">
                    <span>
                      <span className="mr-3">{i + 1}</span>
                      <span>{elem}</span>
                    </span>
                    <span>
                      <span className="px-1">x</span>
                      <span className="px-1">+</span>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-md-6 border my-2">
            <p className="text-dark text-center">Completed</p>
          </div>
          <div className="col-md-6 offset-md-3 border my-2">
            <p className="text-dark text-center">Trash</p>
          </div>
        </div>
      </div>
    );
  }
}

export default todo;
