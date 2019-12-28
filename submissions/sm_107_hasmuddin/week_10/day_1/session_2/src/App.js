import React from "react";
import store from "./components/Store";
import { addTodo, toggleItem, deleteItem } from "./components/Action";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }
  render() {
    const items = store.getState().todo;
    console.log("items", items);
    const completed = items.filter(item => item.completed === true);
    const todo = items.filter(item => item.completed === false);
    return (
      <div className="container p-5">
        <h2>Todo App</h2>
        <div className="row">
          <input
            type="text"
            onChange={e => {
              this.setState({
                input: e.target.value
              });
            }}
            className="bg-dark text-white form-control col-5"
          />
          <button
            onClick={() => {
              store.dispatch(
                addTodo({
                  itemName: this.state.input,
                  completed: false
                })
              );
            }}
            className="btn btn-info"
          >
            Add
          </button>
        </div>

        <table className="border col-5 mt-2">
          {todo.map((ele, index) => {
            return (
              <tr className="p-3 mx-4" key={index + ele.itemName}>
                <td className="mx-3">
                  {index + 1}. {ele.itemName}
                </td>
                <td>
                  <button
                    className="btn btn-info mx-2"
                    onClick={() => {
                      store.dispatch(
                        toggleItem({
                          itemName: ele.itemName,
                          completed: false
                        })
                      );
                    }}
                  >
                    <i className="fas fa-check-square "></i>
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      store.dispatch(
                        deleteItem({
                          itemName: ele.itemName,
                          completed: false
                        })
                      );
                    }}
                  >
                    X
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
        <h3>Completed task</h3>
        <table className="border p-2">
          {completed.map((item, index) => (
            <tr key={index + item.itemName}>
              <td>
                <strike>
                  {index + 1}: {item.itemName}
                </strike>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    store.dispatch(
                      deleteItem({
                        itemName: item.itemName,
                        completed: true
                      })
                    );
                  }}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default App;
