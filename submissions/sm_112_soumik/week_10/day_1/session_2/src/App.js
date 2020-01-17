import React from "react";
import "./App.css";
import store from "./redux/store";
import { addTodo } from "./redux/action";
import { toggleItem } from "./redux/action";
import { delTodo } from "./redux/action";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }
  render() {
    const item = store.getState().todo;
    console.log(item);
    return (
      <div className="text-center col-md-4 m-auto">
        <h2 className="m-4">Todo App</h2>
        <input
          placeholder="Add a task"
          type="text"
          className="form-control my-4"
          value={this.state.input}
          onChange={e => this.setState({ input: e.target.value })}
        />
        <button
          className="btn btn-info m-4 p-2"
          onClick={() => {
            return store.dispatch(
              addTodo({ item: this.state.input, completed: false })
            );
          }}
        >
          Add Tasks
        </button>
        <div>
          <ul className="list-group lead">
            {item.map(ele => {
              return (
                <li key={ele.item} className="list-group-item">
                  <label>
                    <input
                      type="checkbox"
                      onClick={() => store.dispatch(toggleItem(ele))}
                    />
                    {ele.completed ? <strike>{ele.item}</strike> : ele.item}
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h2 className="text-center ">completed tasks</h2>
          <ul className="from-control list-group">
            {item.map(ele =>
              ele.completed ? (
                <li className="list-group item text-success" key={ele.item}>
                  <label>
                    {ele.item}
                    <button
                      className="btn btn-danger"
                      onClick={() => store.dispatch(delTodo(ele))}
                    >
                      delete
                    </button>
                  </label>
                </li>
              ) : (
                <span></span>
              )
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
