import "./App.css";
import Add from "./Add";
import Todo from "./Todo";
import Completed from "./Completed";

import React, { Component } from "react";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: []
    };
  }
  handleAdd = itemName => {
    var item = {
      name: itemName,
      isDone: false
    };
    this.setState({
      todo: [...this.state.todo, item]
    });
  };
  isToggleDone = index => {
    this.setState({
      todo: this.state.todo.map((item, i) =>
        i === index ? { ...item, isDone: true } : item
      )
    });
  };
  isDelete = index => {
    this.setState({
      todo: this.state.todo.filter((item, i) => i != index)
    });
  };
  render() {
    return (
      <div className="app">
        <h1 className="border border-white shadow text-center mb-5">
          Todo APP
        </h1>
        <Add add={this.handleAdd} />
        <Todo
          toggle={this.isToggleDone}
          lable="TODO"
          delete={this.isDelete}
          data={this.state.todo.filter(a => !a.isDone)}
        />
        <Completed
          delete={this.isDelete}
          data={this.state.todo.filter(a => a.isDone)}
        />
      </div>
    );
  }
}

export default App;
