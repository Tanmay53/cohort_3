/** @format */

import React from "react";
import store from "./store";
import { addTodo, toggleItem, removeTodo} from "./action";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }
  render() {
    const items = store.getState().todo;
    console.log(items);
    return (
      <div className="container-fluid">
        <div className="row d-flex justify-content-center text-center">
          <div className="col-12 col-md-8 col-lg-4 bg-light py-3">
            <h1>Todos</h1>
            <form onSubmit={e =>{
              e.preventDefault();
              this.setState({input:e.target.value})
            } }>
              <input
                type="text"
                onChange={e => this.setState({ input: e.target.value })}
                placeholder="add something here"
                className="form-control"
              />
              <br></br>
              <button
                className="btn btn-warning m-2"
                onClick={() =>
                  store.dispatch(
                    addTodo({ itemName: this.state.input, completed: false })
                  )
                }
              >
                ADD TO DO
              </button>
            </form>

            <br></br>
            <h1>Incompleted Todos</h1>
            <ul className="list-group">
              {items.map(item =>
                !item.completed ? (
                  <li
                    key={item.itemName}
                    className="list-group-item h3 text-warning bg-dark m-2"
                  >
                    {item.itemName}
                    <button
                      className="btn btn-danger my-1 mx-3 float-right"
                      onClick={() =>
                        store.dispatch(
                          removeTodo({
                            itemName: item.itemName
                          })
                        )
                      }
                    >
                      Remove Todo
                    </button>
                    <button
                      className="btn btn-success my-1 mx-3 float-right"
                      onClick={() =>
                        store.dispatch(
                          toggleItem({
                            itemName: item.itemName,
                            completed: false
                          })
                        )
                      }
                    >
                      Mark Completed
                    </button>
                
                  </li>
                ) : null
              )}
            </ul>
            <br></br>
            <h1>Completed Todos</h1>
            <ul className="list-group">
              {items.map(item =>
                item.completed ? (
                  <li
                    key={item.itemName}
                    className="list-group-item h3 text-warning bg-dark m-2"
                  >
                    {item.itemName}
                    <button
                      className="btn btn-danger my-1 mx-3 float-right"
                      onClick={() =>
                        store.dispatch(
                          removeTodo({
                            itemName: item.itemName
                          })
                        )
                      }
                    >
                      Remove Todo
                    </button>
                    <button
                      className="btn btn-success my-1 mx-3 float-right"
                      onClick={() =>
                        store.dispatch(
                          toggleItem({
                            itemName: item.itemName,
                            completed: false
                          })
                        )
                      }
                    >
                      Mark Incompleted
                    </button>
                
                  </li>
                ) : null
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
