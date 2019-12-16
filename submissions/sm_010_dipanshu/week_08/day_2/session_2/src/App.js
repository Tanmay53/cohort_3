import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: [],
      todoListCompleted: [],
      currentTask: "",
      displayCompleted: false
    };
  }

  handleInput = event => {
    this.setState({ currentTask: event.target.value });
    // setTimeout(() => {
    //   console.log(this.state.currentTask);
    // }, 1000);
  };

  handleClick = () => {
    this.state.todoList.push(this.state.currentTask);
    this.setState({
      todoList: this.state.todoList,
      currentTask: ""
    });
    // setTimeout(() => {
    //   console.log(this.state.todoList);
    // }, 1000);
  };

  handleDelete = event => {
    let newToDoList = this.state.todoList.filter((task, index) => {
      return index !== Number(event.target.getAttribute("idx"));
    });
    this.setState({ todoList: newToDoList });
  };

  handleCheck = event => {
    let newToDoListCompleted = this.state.todoList.filter((task, index) => {
      return index === Number(event.target.getAttribute("idx"));
    });
    this.state.todoListCompleted.push(newToDoListCompleted);

    let newToDoList = this.state.todoList.filter((task, index) => {
      return index !== Number(event.target.getAttribute("idx"));
    });
    this.setState({ todoList: newToDoList });
  };

  showCompleted = () => {
    this.setState({ displayCompleted: true });
  };

  displayCompletedTasks = () => {
    if (this.state.displayCompleted) {
      return this.state.todoListCompleted.map((task, index) => {
        return (
          <div
            className="container col-12 mx-auto bg-dark text-light p-1 rounded mb-3"
            key={task + index}
          >
            <div className="d-flex">
              <div className="form-check form-check-inline ml-3">
                <input className="form-check-input" type="checkbox" checked />
              </div>
              <div className="align-self-center">
                <del>{task}</del>
              </div>
            </div>
          </div>
        );
      });
    }
  };

  render() {
    const completedTasks = this.displayCompletedTasks();
    return (
      <div className="container mt-5 col-5">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control border-dark border-right-0 text-center"
            placeholder="Add to-do"
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={this.state.currentTask}
            onChange={this.handleInput}
          />
          <div className="input-group-append">
            <button
              className="btn border-dark border-left-0"
              onClick={this.handleClick}
            >
              +
            </button>
          </div>
        </div>
        {this.state.todoList.map((task, index) => {
          return (
            <div
              className="container col-12 mx-auto bg-dark text-light p-1 rounded mb-3"
              key={task + index}
            >
              <div className="d-flex justify-content-between">
                <div className="form-check form-check-inline ml-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    onChange={this.handleCheck}
                    idx={index}
                  />
                </div>
                <div className="align-self-center">{task}</div>
                <button
                  className="btn btn-sm btn-danger mr-3"
                  idx={index}
                  onClick={this.handleDelete}
                >
                  x
                </button>
              </div>
            </div>
          );
        })}
        <div className="col-5 bg-dark text-light p-1 rounded mb-3 text-center">
          <button className="btn text-light" onClick={this.showCompleted}>
            Show Completed ToDo
          </button>
        </div>

        {completedTasks}
      </div>
    );
  }
}

export default App;
