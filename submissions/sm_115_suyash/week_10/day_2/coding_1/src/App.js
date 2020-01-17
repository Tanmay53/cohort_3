import React, { Component } from "react";
import "./App.css";
import { addItem, completedTask } from "./Redux/Action";
import { connect } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: "",
      id: Date.now(),
      flag: false
    };
  }
  changeInput = e => {
    let list = this.state.list;
    list = e.target.value;
    this.setState({
      list: list,
      id: Math.random() * 50,
      flag: false
    });
    console.log(this.state);
  };

  addtodo = () => {
    this.props.add(this.state);
    this.setState({
      list: ""
    });
  };

  render() {
    // console.log(store.getState().listArr);
    let listArr = this.props.todoArr;
    let notCompletedTaskArr = listArr.filter(item => {
      if (!item.flag) {
        return item.list;
      }
    });
    let CompletedTaskArr = listArr.filter(item => {
      if (item.flag) {
        return item.list;
      }
    });
    return (
      <div className="App">
        <div className="todo rounded py-4">
          <h1 className="">To-Do List</h1>
          <div>
            <input
              className="py-1 px-2 "
              type="text"
              value={this.state.list}
              onChange={this.changeInput}
            />
            <button
              className="py-1 px-2 bg-dark text-white btn mb-1"
              onClick={this.addtodo}
            >
              Add
            </button>
          </div>

          <ul style={{ listStyle: "none", textAlign: "left" }}>
            {notCompletedTaskArr.map((item, i) => {
              return (
                <li>
                  {i === 0 ? (
                    <p className="text-center pt-3 h4">List</p>
                  ) : (
                    <p></p>
                  )}
                  <input
                    className="mr-2"
                    type="checkbox"
                    onClick={() => this.props.complete(item.id)}
                  />
                  <span className="text-danger h5 font-weight-normal">
                    {item.list}
                  </span>
                </li>
              );
            })}
          </ul>
          <div>
            <ul style={{ listStyle: "none", textAlign: "left" }}>
              {CompletedTaskArr.map((item, i) => {
                return (
                  <li>
                    {i === 0 ? (
                      <p className="text-center pt-3 h4">Completed</p>
                    ) : (
                      <p></p>
                    )}

                    <span className="h5 text-danger font-weight-normal">
                      <span className="mr-2">{i + 1 + "."}</span>
                      <strike>{item.list}</strike>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todoArr: state.listArr
});

const mapDispatchToProps = dispatch => ({
  add: item => dispatch(addItem(item)),
  complete: item => dispatch(completedTask(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
