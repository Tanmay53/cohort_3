/** @format */

import React, { Component } from "react";
import DisplayTodo from "../components/displaytodo";
import DisplayCompletedTodo from "../components/displayCompletedTodo";
class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoArr: [],
      completedArr: []
    };
  }
  getValue = e => {
    e.preventDefault();

    let val = document.getElementById("addTodoItem").value;
    let arr = [...this.state.todoArr];
    arr.push(val);
    this.setState({
      todoArr: arr
    });
    document.getElementById("addTodoItem").value = "";
  };
  todoCompleted = ele => {
    let arr = [...this.state.todoArr];
    let completedArr = [...this.state.completedArr];
    arr = arr.filter(element => {
      return element !== ele;
    });
    completedArr.push(ele);
    this.setState({
      todoArr: arr,
      completedArr: completedArr
    });
  };
  todoDeleted = ele => {
    let completedArr = [...this.state.completedArr];
    let nonDeleted = completedArr.filter(element => {
      return element !== ele;
    });
    this.setState({
      completedArr: nonDeleted
    });
  };
  hideNSeek = () => {
    var myDiv = document.getElementById("myDiv");
    if (myDiv.style.display === "none") {
      myDiv.style.display = "block";
    } else {
      myDiv.style.display = "none";
    }
  };
  render() {
    return (
      <div className="row d-flex justify-content-center m-3 p-4">
        <div className="col-12 d-flex justify-content-center">
          <form className="row">
            <div className="col-7">
              <input
                className="form-control"
                type="text"
                id="addTodoItem"
                placeholder="Enter Todos"
              ></input>
            </div>
            <div className="col-5">
              <button className="btn btn-primary" onClick={this.getValue}>
                Add Todos
              </button>
            </div>
          </form>
        </div>
        <h1 className="text-center text-light m-4">Display Todos</h1>
        <div className="col-12">
          <DisplayTodo data={this.state.todoArr} todoFn={this.todoCompleted} />
        </div>
        <button className="btn-lg btn-primary" onClick={this.hideNSeek}>
          Display Completed Todos
        </button>
        <div className="col-12" id="myDiv" style={{ display: "none" }}>
          <DisplayCompletedTodo
            completedTodo={this.state.completedArr}
            deleteTodo={this.todoDeleted}
          />
        </div>
      </div>
    );
  }
}

export default Todo;
