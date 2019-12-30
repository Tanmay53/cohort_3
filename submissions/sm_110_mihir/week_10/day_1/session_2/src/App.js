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
        console.log(items);
        const completed = items.filter(item => item.completed === true);
        const todo = items.filter(item => item.completed === false);
        return (
            <div className="app">
                TODO
                <input
                    type="text"
                    onChange={e => this.setState({ input: e.target.value })}
                    placeholder="add something"
                />
                <button
                    onClick={() =>
                        store.dispatch(
                            addTodo({
                                itemName: this.state.input,
                                completed: false
                            })
                        )
                    }
                >
                    ADD TO DO
                </button>
                <ul>
                    {todo.map(item => (
                        <li key={item.itemName}>
                            <button
                                onClick={() =>
                                    store.dispatch(
                                        toggleItem({
                                            itemName: item.itemName,
                                            completed: false
                                        })
                                    )
                                }
                            >
                                <i className="fas fa-check-square"></i>
                            </button>

                            <span>{item.itemName}</span>

                            <button
                                onClick={() =>
                                    store.dispatch(
                                        deleteItem({
                                            itemName: item.itemName,
                                            completed: false
                                        })
                                    )
                                }
                            >
                                <i class="far fa-window-close"></i>
                            </button>
                        </li>
                    ))}
                </ul>
                <h3>Completed tasks</h3>
                <ul>
                    {completed.map(item => (
                        <li key={item.itemName}>
                            <strike>{item.itemName}</strike>
                            <button
                                onClick={() =>
                                    store.dispatch(
                                        deleteItem({
                                            itemName: item.itemName,
                                            completed: true
                                        })
                                    )
                                }
                            >
                                <i class="far fa-window-close"></i>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default App;
